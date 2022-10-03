import logo from './logo.svg';
import Movies from './movies/movies';
import Contador from './Contador';
import './App.css';

const myData = [
  { Framework: "Boostrap"} ,
  { Framework: "Material"} ,
  { Framework: "Tailwind"} ,
  { Framework: "Next"}
]

function App() {

  const myDataList = myData.map( (element) => {
        return ( <h2> { element.Framework } </h2> )
    } );

  return (
    <div className="App">
      <Contador></Contador>
      <Movies data={myDataList}>
        <h1> Hello World!</h1>
        <h1> From React Children!</h1>
      </Movies>
    </div>
  );
}

export default App;
