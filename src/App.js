import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [ input,setInput ] = useState();
  const [ result,setResult ] = useState();
  const changeHandler = e => {
    setInput(e.target.value)
  }
  const calciHandler = input =>{
    try{ 
      setResult(eval(input))
    }
    catch{
      setResult("Please input correctly")
    }
  }
  const styles={
    backgroundColor:"#3079ED",
    color:"black"
  }
  return (
    <div className='container'>
      <br/> <br />
        {/* <input type="text" name="input" value={input} placeholder="calculate" onChange={changeHandler} />  */}
        
        <div class="form-group row">
          <div class="col-xs-2">
            <input name="input" value={input} onChange={changeHandler} class="form-control" id="ex1" type="text" />
          </div>
        </div> 
        <button type="button" class="btn btn-success m-4"  onClick={() => calciHandler(input)} >Result</button>
        <br /><br/>
        <h4>{result}</h4>
    </div>
  );
}

export default App;
