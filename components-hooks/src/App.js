import logo from './logo.svg';
import Movies from './Components/movies/movies';
import Contador from './Components/Contador/Contador';
import './App.css';

/*const myData = [
  { Framework: "Boostrap"} ,
  { Framework: "Material"} ,
  { Framework: "Tailwind"} ,
  { Framework: "Next"}
]*/

const movieData = [
  { thumbnail: "https://cdn.pixabay.com/photo/2022/09/14/14/36/window-7454482_640.jpg" , urlVideo: "" , preview: "", title: ""},
  { thumbnail: "https://cdn.pixabay.com/photo/2022/10/01/02/31/sunset-7490522__340.jpg" , urlVideo: "" , preview: "", title: "" },
  { thumbnail: "https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238__340.jpg" , urlVideo: "" , preview: "", title: "" }
];

function App() {

  const myDataList = movieData.map( (element) => {
        return ( <img src={ element.thumbnail } alt= { element.title } />  )
    } );
    // Voy a pasarle un array vacio al componente movies
    // y voy a constuir una lista de imagenes basados en un array de datos.
  return (
    <div className="App">
      <Contador></Contador>
      <Movies data={[]}> 
        {myDataList}
      </Movies>
    </div>
  );
}

export default App;
