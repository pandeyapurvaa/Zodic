import React from 'react';
import './aries.css';
import leo from '../components/images/leo.png'
function Leo()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={leo}/>
    </div>
    <div className="Name">-----Leo-----</div>
    <div className="Element">Element-Fire</div>
    <div className="description"><p>
    <font>Strengths:</font> creative, passionate, generous, warm-hearted, cheerful, humorous</p>
   <p> <font>Weaknesses:</font> arrogant, stubborn, self-centered, lazy, inflexible</p>
    </div>
 </div>
</>);
}
export default Leo ;