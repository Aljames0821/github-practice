import './App.css'

function App() {


  return (
    <div className="App">
      
      <h1>CALCULATOR</h1>
      <div className="screen" id="result-screen">0</div>
      <div className="buttons">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
          <button key={number} className="button">
            {number}
          </button>
        ))}       
        <button className="cancel">C</button>
         <button className="equal">=</button>
        
      </div>
    </div>
   
  )
}

export default App
