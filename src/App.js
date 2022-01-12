import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json';
console.log(todos)


function App() {
/*  contructor() {
   super();
   this.state={
     title: "aplicacion de tareas",
     ntareas: 10
   }
 } */
 
 return ( <div className = "App" >
   <Navigation titulo="Hola"/>
    <img src = {logo} className = "App-logo" alt = "logo" />


    </div>
  );
}

export default App;