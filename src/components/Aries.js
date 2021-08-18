import React from 'react';
import './aries.css';
import aries from '../components/images/aries.png'
function Aries()
{
    return(<>
 <div className="zodic">
    <div className="logo">
        <img src={aries}/>
    </div>
    <div className="Name">-----Aries-----</div>
    <div className="Element">Element-Fire</div>
    <div className="description"><p>
    <font>Strengths:</font> courageous, determined, confident, enthusiastic, optimistic, honest, passionate</p>
   <p> <font>Weaknesses:</font> impatient, moody, short-tempered, impulsive, aggressive</p>
    </div>
 </div>
</>);
}
export default Aries ;