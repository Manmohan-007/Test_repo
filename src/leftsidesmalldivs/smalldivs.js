import React from "react" ;  
import Button from "../button/button"

const SmallDiv =(props)=>{

return(

    <div className={props.ClassName} > 
    <img src ={props.imgsrc}></img>
    <span className={props.SpanClass}>{props.SpanText}</span> 
    <img src={props.imgsrc2}></img>
    <span>{props.SpanText2}</span> 
    <Button ClassName = {props.btnClass}/>
 </div> 

)

} ;

export default SmallDiv ; 