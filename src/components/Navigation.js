
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import React from 'react';
import './Navigation.css';
import Profil from '../pages/Profil';
import Chat from '../pages/Chat';
import logo from '../img/logo.png'


const onBtn = (e) => {
    const profil = document.querySelector('#btn-profil');
    const chat = document.querySelector('#btn-chat');
    



    // ===
// profil.addEventListener('click', function(){

//     chat.classList.remove('btn-hover')
//     profil.classList.add('btn-hover')
//     profil.classList.remove('btn-default')

// })

// chat.addEventListener('click', function(){

//     profil.classList.add('btn-hover')
//     profil.classList.remove('btn-default')
//     // chat.classList.add('btn-default')
//     // chat.classList.remove('btn-hover')

// })
// console.log(e.target.id)
    
    if(e.target.id === 'btn-chat'){

        profil.classList.remove('btn-hover')
        profil.classList.add('btn-default')

        chat.classList.add('btn-hover')
        chat.classList.remove('btn-default')
        // console.log('ya ini chat')
        // console.log(e)
    }else if(e.target.id === "btn-profil"){
        chat.classList.remove('btn-hover')
        chat.classList.add('btn-default')

        profil.classList.add('btn-hover')
        profil.classList.remove('btn-default')
        // console.log('ya ini profil')

    }
        // e.target.classList.add("btn-hover")
        // e.target.classList.remove("btn-default")
        // console.log('ini btn Hover')
        // e.target.classList.remove("btn-default")
        // e.target.classList.add("btn-hover")
      

}


const Navigation = () => {

    return(
        <div className="container">                    
        <Router>
            <nav className="navigation">
                <div className="wrap-top">
                    <div className="bg-top"></div>
                    <div className="img-top">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className='wrap-name'>
                    <h4>Rezal Nur Syaifudin</h4>
                    <h5>Portofolioku</h5>
                    <div className='buttom-top'>
                        <Link to="/" onClick={onBtn} className='btn-hover' id='btn-profil'>Profil</Link>
                        <Link to="/chat" onClick={onBtn} className="btn-default" id='btn-chat'>Chat</Link>
                    </div>
                </div>
            </nav>
                <Routes>
                    <Route element={<Profil /> } path="/" />
                    <Route element={<Chat />} path="/chat" />
                </Routes>
            </Router>   
        </div>
    )
}

export default Navigation;