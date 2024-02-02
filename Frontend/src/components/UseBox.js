import React from 'react';
import './Usebox.css';


function UseBox({setModalBox}) {
  return (
    <div className="UseBox">
        <button onClick={() => setModalBox('Login')}>Log in</button>
        <button onClick={() => setModalBox('Regist')}>Regist</button>
        

    </div>
  )
}

export default UseBox;