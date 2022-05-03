import "./App.css";
import About from "./component/About";
import { render } from "react-dom";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, {useState} from "react"; // shortcut imrs
import Alert  from "./component/Alert";
import ReactDOM from 'react-dom';
import {
  BrowserRouter  as Router,
   Switch, Route,Link
} from "react-router-dom";


function App() {

             const [mode , setmode] = useState('light');  // whether dark mode is enable or not 
             const [modeButton , setmodeButton] = useState('Enable dark mode');
              const [alert , setAlert] = useState({});

// Alert function 

const showalert =(message ,type)=>{
            setAlert({

            message : message,
            type : type

            })
setTimeout(()=>{
 setAlert({});
},3000);

                            }

  const togglemode =()=>{
              if(mode === 'light'){

          setmode('dark');
          document.body.style.background = "blue";
          showalert("dark mode enbled","Success");
          // setInterval (()=>{
          //     document.title = "Dark mode";

          // },3000);
          // setInterval (()=>{
          //     document.title = "light mode";

          // },1800);                
              }
              
              else {
                setmode('light');
                document.body.style.background = "white";
          showalert("light mode enbled","Success");
              }
          setmodeButton("Enable light Mode")

                          }
  return(
    <>
   
    <Router>

    <Navbar tittle = "Textutils" About="About" mode = {mode} togglemode = {togglemode} modeButton={modeButton}/>
        <Alert alert = {alert}/>
        <div className="container">
                     {/* <TextForm showalert={showalert} heading ="Enter something to Analyze" mode={mode}/> */}

              <Switch>
        <Route exact path='/about'>
            <About/>
          </Route>

          <Route exact path='/'>
<TextForm showalert={showalert} heading ="Enter something to Analyze" mode={mode}/>

            </Route> 
            
        </Switch>
          
        </div>
        </Router>
         {/* <TextForm showalert={showalert} heading ="Enter something to Analyze" mode={mode}/> */}
     </>
        );
}

export default App;
