import logo from './logo.svg';
import './App.css';

function App() {
  const age='18';
  const  ismale=true;
  const student = {
    name:'mai minh nhut',
    born:'2000'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        mai minh nhut 
        </p>
        <p>{age}</p>
        {ismale? <p>male</p>: <p>female</p>}
        {ismale&&<p>male</p>}
        {!ismale&&<p>female</p>}
        {ismale&&
          <div>
            <p>female</p> 
            <p>nam</p> 
            <p>female</p> 
          </div>
        }     
        {ismale&&
          <>
            <p>female</p> 
            <p>namm</p> 
            <p>female</p> 
          </>
        }     
        {student.name}
      </header>
    </div>
  );
}

export default App;
