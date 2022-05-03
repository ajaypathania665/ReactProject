import React , {useState}from 'react'
import Alert from 'react'
//  use state in the react import line 
export default function TextForm(props) {

    //  state initilization 
  
  const  handleUpClick =() =>{

//  setText("Uppercased was clicked"+text);/

//  console.log("Hi i am uppercase function" + text);
 let newText = text.toUpperCase();
   setText(newText);
     props.showalert("converted to uppercase","Success");
//  with this line text value add to the string someonr click on a button

    }

    // Lower case

    const  handleLowClick =() =>{


 let newText = text.toLowerCase();
   setText(newText);
//  with this line text value add to the string someonr click on a button

    }

    // handle blank
      const  handleBlank =() =>{


 let newText ='';
   setText(newText);
//  with this line text value add to the string someonr click on a button

    }
    


    // only because of event object we r able to write in a field
    const handleOnClick=(event)=>{
// console.log("Water");
setText(event.target.value);
         
    }
      const [text, setText] = useState("");
  return (
  <>
  <div className="addition" style = {{color :props.mode ==='dark'?'white':'black'}} >
   <h1>{props.heading}</h1>
<div className="mb-3">
  
 {/* <label forhtml="mybox" className="form-label">Example text</label> */}
<textarea style = {{backgroundColor :props.mode ==='dark'?'grey':'white', color :props.mode ==='dark'?'white':'black'}}  className="form-control" onChange={handleOnClick} value={text} id="mybox" rows="8"/>
</div>
{/*  button.btn.btn.primary */}
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert Uppercase</button>
   <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert Lowercase</button>
   <button className="btn btn-primary mx-1" onClick={handleBlank}>Clear </button>

  </div>

  <div className="addition" style = {{color :props.mode ==='dark'?'white':'black'}} >
    <h3>word count :{text.split(" ").length-1}  and character count is :{text.length} </h3>
   <h3>Time count for read the text is : {0.08 *text.split(" ").length}</h3>
  
  <h1>Preview</h1>
  <h3>{text.length <= 0 ?"Enter some text in the field to preview" :text}</h3>
 </div>
  </>
 )
}
