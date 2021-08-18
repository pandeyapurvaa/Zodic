import React from 'react';
import './aries.css';
import cancer from '../components/images/cancer.png'
function Cancer()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={cancer}/>
    </div>
    <div className="Name">-----Cancer-----</div>
    <div className="Element">Element-Water</div>
    <div className="description"><p>
    <font>Strengths:</font> Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive</p>
   <p> <font>Weaknesses:</font>  moody, pessimistic, suspicious, manipulative, insecure</p>
    </div>
 </div>
</>);
}
export default Cancer ;