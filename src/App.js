import './App.css';
import ReactDOM from 'react-dom'
import Welcome from './components/Welcome_Now'
import Welcome2 from './components/Welcome_2'
import {Form, Card, Table, CardGroup} from 'react-bootstrap/'
// import {DiscreteColorLegend, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, LineMarkSeries, RadialChart} from 'react-vis';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const handleSubmit = () => {

  }

  return (
    <div className="App">
    <div>
    <div style={{position:'absolute', left:'22%', right:'22%', top:'10%', bottom:'10%'}}>
    <Card className= 'mx-auto border-secondary' style={{opacity:.4, background:'grey', justify_content:'center'}}>
    <Card.Title style={{color:'white'}}>
    <h1>Welcome to TradeState</h1>
    </Card.Title>
    <h5 style={{color:'white', opacity:1}}>In this world, traders can share in on the gains of the financial markets.('yeah nah.. though..'')<br></br>
      But still, it would be nice if you joined our growing community and help building a better world!
      </h5>
    
      </Card>

          <button
            type="submit"
            className="btn btn-secondary submit-button focus:ring focus:outline-none w-full"
           style = {{margin:'5rem', width:'10rem', opacity:0.7}}>
            Login with web3.0 wallet
          </button>



    </div>
    <Welcome2 />
    </div>
    </div>
  );
}

export default App;
