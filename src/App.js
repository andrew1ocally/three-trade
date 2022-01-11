import './App.css';
import ReactDOM from 'react-dom'
import Welcome2 from './components/Welcome_2'
import {Form, Card, Table, CardGroup} from 'react-bootstrap/'
import {useState} from 'react'
// import {DiscreteColorLegend, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, LineMarkSeries, RadialChart} from 'react-vis';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

    const [DefaultAccount, setDefaultAccount] = useState(null);
    const [Logged_in, setLogged_in] = useState(false);
    const [WelcomeState, setWelcomeState] = useState(false);
    var divs = document.getElementsByTagName('div')
    var root_set = document.getElementById('root')
    root_set.style.overflow = 'hidden'
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
        div.style.display = 'block'
        while (div.style.opacity <= 0.45) {
          await(sleep(200))
          opacity = opacity + 0.0001;
          div.style.opacity = opacity
          }
        }
      }
  }



  const handleSubmit = async () => {  
    handle_login()    
    class_fader('fadeOut')
    if (WelcomeState) {
    await class_enter('cards')
     await class_enter('fadeIn')
    }
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
      class_enter('cards')
    }
  }

  window.ethereum.on('accountsChanged', accountChangedHandler)

  const handle_login = async () => {
    setLogged_in(true)
    connectWalletHandler()
    await setWelcomeState(true)

  } 

  const enlarger = () => {

  }



  document.body.classList.add("no-scroll")
  return (
    <div className="App">
      <Welcome2 logged_in={Logged_in} welcomestate={WelcomeState}/>
      <div className='fadeOut' style={{opacity: 0.4, position:'absolute', left:'22%', right:'22%', top:'10%', bottom:'10%', display:'inline-block'}}>
        <Card className= 'mx-auto ' style={{borderColor: 'blue', background:'transparent', justify_content:'center'}}>
        <Card.Title style={{color:'white'}}>
        <h1>Welcome to TradeState</h1>
        <br></br>
        <br></br>
        </Card.Title>
        <h5 style={{color:'white', opacity:1}}>In this world, traders can share in on the gains of the financial markets.('yeah nah.. though..'')<br></br>
          But still, it would be nice if you joined our growing community and help building a better world!
          </h5>
        
          </Card>
            <button
            className="btn btn-secondary submit-button focus:ring focus:outline-none w-full"
            style = {{zIndex:1, margin:'5rem', width:'10rem', opacity:0.7}} onClick={handleSubmit}>
            Login with web3.0 wallet 
            </button>
      </div>  
  
      <div className='fadeIn' style={{opacity: 0.4, position:'absolute', left:'22%', right:'22%', top:'10%' , bottom:'10%', display:'none', colour:'white'}}>
      <Card className= 'mx-auto ' style={{borderColor: 'blue', background:'transparent', padding:'1rem', justify_content:'center', color:'white'}}>
      <Card.Title>
      <h2>Welcome back,</h2>
      <br></br>
      <br></br>
      </Card.Title>
      <Card.Text>
      <h4>Good to see you again,Andrew!</h4>
      </Card.Text>
      </Card>
      </div> 
      
      <div>
      <Card className='text-white bg-dark mx-auto'style={{zIndex:2, left:'15%', right:'15%', top:'30%', opacity:'0.6', position:'absolute', display:'none'}}>
      <Card.Title><h2>User Information</h2></Card.Title>
      <Card.Header><h4>MetaMask Account</h4></Card.Header>
<h5>
      Username : Andrew <br></br>
      Address :<br></br>
      Balance(ETH) : {DefaultAccount}<br></br>
      Network Used: <br></br>
      Email address:</h5> 
      </Card>
      </div>
      <div className='cards' style={{opacity:'0.6', position:'absolute', top:'60%', display:'none'}}>
      <CardGroup>
      <Card  className='kaart' style={{marginTop: '-5%', margin:'4%', background:'#000033', justify_content:'center', color:'white'}}>
      <Card.Img variant="top" src="https://crypto-money.io/wp-content/uploads/2019/10/Ethereum.jpg" />
      <Card.Text>
      he<br></br>
      </Card.Text>
      </Card>
      <Card id='napa' className='border-dark' style={{marginTop:'-5%', margin:'4%', background:'#000033', justify_content:'center', color:'white'}}>
      <Card.Img variant="top" src="https://crypto-money.io/wp-content/uploads/2019/10/Ethereum.jpg" />
      <Card.Text>
      he
      </Card.Text>
      </Card>
      <Card className= ' border-dark' style={{marginTop:'-5%', margin:'4%', background:'#000033', justify_content:'center', color:'white'}}>
      <Card.Img variant="top" src="https://crypto-money.io/wp-content/uploads/2019/10/Ethereum.jpg" />
      <Card.Text>
      he
      </Card.Text>
      </Card>
      <Card className= ' border-dark' style={{marginTop:'-5%', margin:'4%', background:'#000033', justify_content:'center', color:'white'}}>
      <Card.Img variant="top" src="https://crypto-money.io/wp-content/uploads/2019/10/Ethereum.jpg" />
      <Card.Text>
      he
      </Card.Text>
      </Card>
      <Card className= ' border-dark' style={{marginTop:'-5%', margin:'4%', background:'#000033', justify_content:'center', color:'white'}}>
      <Card.Img variant="top" src="https://crypto-money.io/wp-content/uploads/2019/10/Ethereum.jpg" />
      <Card.Text>
      he
      </Card.Text>
      </Card>
      </CardGroup>
      </div>
    </div> 


  );
}

export default App;
