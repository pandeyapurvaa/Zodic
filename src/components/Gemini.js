import React from 'react';
import './aries.css';
import gemini from '../components/images/gemini.png'
function Gemini()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={gemini}/>
    </div>
    <div className="Name">-----Gemini-----</div>
    <div className="Element">Element-Air</div>
    <div className="description"><p>
    <font>Strengths:</font> gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas</p>
   <p> <font>Weaknesses:</font> nervous, inconsistent, indecisive</p>
    </div>
 </div>
</>);
}
export default Gemini ;