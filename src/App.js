import './App.css';
import ReactDOM from 'react-dom'
import Welcome2 from './components/Welcome_2'
import {Form, Card, Table, CardGroup} from 'react-bootstrap/'
import {useState} from 'react'
// import {DiscreteColorLegend, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, LineMarkSeries, RadialChart} from 'react-vis';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
    const [DefaultAccount, setDefaultAccount] = useState(null);
    var divs = document.getElementsByTagName('div')





  const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  

  const class_fader = async (name) => {
    for (var i = divs.length; i--;){
      var div = divs[i]
      
      if(div.className ===name){
        var opacity = parseFloat(div.style.opacity)
        while (div.style.opacity >= 0) {
          await(sleep(20))
          opacity = opacity - 0.01;
          div.style.opacity = opacity
          }
          // div.style.display = 'none'
        }
      }
  }

  const class_enter = async (name) => {
    for (var i = divs.length; i--;){
      var div = divs[i]
      
      if(div.className ===name){
        var opacity = parseFloat(div.style.opacity)
        div.style.position = 'absolute'
        div.style.display = 'inline-block'
        while (div.style.opacity <= 0.45) {
          await(sleep(20))
          opacity = opacity + 0.01;
          div.style.opacity = opacity
          }
        }
      }
  }



  const handleSubmit = async () => {      
    await class_fader('fadeOut')
    await connectWalletHandler()
    await class_enter('fadeIn')
    }
  
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount)
  }

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      await window.ethereum.request({method: 'eth_requestAccounts'})
      .then( result => {
        accountChangedHandler(result[0])
      })
      class_enter('fadeIn')
    }
  }

  window.ethereum.on('accountsChanged', accountChangedHandler)

  var name = 'Andrew'

  
  return (
    <div className="App">
      <Welcome2/>
      <div className='fadeOut' style={{opacity: 0.4, position:'absolute', left:'22%', right:'22%', top:'10%', bottom:'10%', display:'inline-block'}}>
        <Card className= 'mx-auto border-secondary' style={{background:'grey', justify_content:'center'}}>
        <Card.Title style={{color:'white'}}>
        <h1>Welcome to TradeState</h1>
        </Card.Title>
        <h5 style={{color:'white', opacity:1}}>In this world, traders can share in on the gains of the financial markets.('yeah nah.. though..'')<br></br>
          But still, it would be nice if you joined our growing community and help building a better world!
          </h5>
        
          </Card>
            <button
            className="btn btn-secondary submit-button focus:ring focus:outline-none w-full"
            style = {{margin:'5rem', width:'10rem', opacity:0.7}} onClick={handleSubmit}>
            Login with web3.0 wallet 
            </button>
      </div>  
      <div className='fadeIn' style={{opacity: 0.4, position:'absolute', left:'22%', right:'22%', top:'10%' , bottom:'10%', display:'none', colour:'white'}}>
      <Card className= 'mx-auto border-secondary' style={{background:'grey', justify_content:'center'}}>
      <Card.Title>
      <h2>Welcome back,</h2>
      <h3>friend of the state of trades.</h3><br></br>
      <h4>Good to see you again, {name} !</h4>
      </Card.Title>
      hey
      </Card>
      </div>
    </div> 
  );
}

export default App;
