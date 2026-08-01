import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="card-holder">
        <Card name="First Card" buttonValue="Click" />
        <Card name="Second Card" buttonValue="Visit Profile" />
      </div>
    </>
  )
}

export default App
