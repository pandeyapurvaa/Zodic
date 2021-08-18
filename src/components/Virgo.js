import React from 'react';
import './aries.css';
import virgo from '../components/images/virgo.png'
function Virgo()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={virgo}/>
    </div>
    <div className="Name">-----Virgo-----</div>
    <div className="Element">Element-Earth</div>
    <div className="description"><p>
    <font>Strengths:</font>  loyal, analytical, kind, hardworking, practical</p>
   <p> <font>Weaknesses:</font> shyness, worry, overly critical of self and others, all work and no play</p>
    </div>
 </div>
</>);
}
export default Virgo ;