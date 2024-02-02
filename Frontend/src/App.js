import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Regist from './components/Regist';

function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')


  const pages = {
    Main: <Main />,
    Basket: <Basket />

  }

  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Regist: <ModalBox setModalBox={setModalBox}><Regist /></ModalBox>
  }

  return (
    <div className="App">
        <Header  setPage={ setPage } setModalBox={setModalBox} />
        { pages[page] }
        { modalBoxes[modalBox] }
        <Footer />
    </div>
  )
}

export default App;
