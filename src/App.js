import React from 'react';
import './style.css';
import Hello from "./image2.png"
import Hi from "./jb.mp4"

function App() {
  return ( 
    <div className="App">
 
<h1 className="title red">Your name here</h1>

<img className="img" src={Hello} alt='moon' />
<img className="img2" src='images/images3.png' />


<video controls className='video'>
  <source  src={Hi} type="video/mp4"/>
</video>

     
    </div>
  );
}

export default App;
