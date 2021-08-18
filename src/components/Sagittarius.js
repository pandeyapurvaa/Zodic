import React from 'react';
import './aries.css';
import sagittarius from '../components/images/sagittarius.png'
function Sagittarius()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={sagittarius}/>
    </div>
    <div className="Name">-----Sagittarius-----</div>
    <div className="Element">Element-Fire</div>
    <div className="description"><p>
    <font>Strengths:</font> generous, idealistic, great sense of humor</p>
   <p> <font>Weaknesses:</font> promises more than can deliver, very impatient, will say anything no matter how undiplomatic</p>
    </div>
 </div>
</>);
}
export default Sagittarius ;