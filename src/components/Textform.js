import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpercase = ()=>{
        //console.log("you clicked ");
        var ntext = text.toUpperCase();
        setText(ntext);
        props.showAlert("Uppercase converted","success");
    }
    const handleLowercase = ()=>{
        //console.log("you clicked ");
        var ntext = text.toLowerCase();
        setText(ntext);
        props.showAlert("Lowercase converted","success");
    }
    const handlecleare = ()=>{
        //console.log("you clicked ");
        var ntext = ("");
        setText(ntext);
        props.showAlert("Text is cleared","success");
    }
    const handleonchange = (event)=>{
        //console.log("on change "); 
        setText(event.target.value)  
      
    }
    const [text, setText] = useState("");
    //setText("hey");
  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'rgb(3 24 41)'}}>
      <h1 className='mb-3'>{props.heading}</h1>
      <div className='mb-3'>
      <textarea className='form-control' value={text} onChange={handleonchange} style={{background: props.mode==='dark'?'rgb(3 24 41)':'white',color: props.mode==='dark'?'white':'black'}} id='mybox' rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpercase} >Convert Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowercase} >Convert Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecleare} >Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'rgb(3 24 41)'}}>
        <h2> Your text summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} need Minutes Read</p>
    </div>
    </>
  )
}