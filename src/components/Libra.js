import React from 'react';
import './aries.css';
import libra from '../components/images/libra.png'
function Libra()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={libra}/>
    </div>
    <div className="Name">-----Libra-----</div>
    <div className="Element">Element-Air</div>
    <div className="description"><p>
    <font>Strengths:</font> cooperative, diplomatic, gracious, fair-minded, social</p>
   <p> <font>Weaknesses:</font> indecisive, avoids confrontations, will carry a grudge, self-pity</p>
    </div>
 </div>
</>);
}
export default Libra ;