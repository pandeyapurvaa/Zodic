import React from 'react';
import './aries.css';
import pisces from '../components/images/pisces.png'
function Pisces()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={pisces}/>
    </div>
    <div className="Name">-----Pisces-----</div>
    <div className="Element">Element-Fire</div>
    <div className="description"><p>
    <font>Strengths:</font> Compassionate, artistic, intuitive, gentle, wise, musical</p>
   <p> <font>Weaknesses:</font> Fearful,overly trusting, sad, desire to escape reality,can be a victim or a martyr </p>
    </div>
 </div>
</>);
}
export default Pisces ;