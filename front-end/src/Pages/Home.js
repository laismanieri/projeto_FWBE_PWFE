import { useState } from "react";
import {NavLink, Outlet} from 'react-router-dom';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import './Home.css';


const Home = () =>{

    const [open, setopen] = useState(true);

    function expandMenu(){
        setopen(!open);
    }

    return(
        <div className='tela'>
            
            <div className={open?'menu-lateral-open':'menu-lateral-closed'}>
                <button className="arrow" onClick={expandMenu}>
                    {open? <KeyboardDoubleArrowLeftIcon className="left"/>: <KeyboardDoubleArrowRightIcon />}
                </button>
                
                <ul className="ul">
                    <li className="li-cadastro">
                        <img title="Cadastro"   src="images/cadastro.png" alt="ícone um computador com cadastro"/>
                    </li>
                    <br/><br/><br/>
                    <li className="li">
                        <NavLink to='/search'>
                            <img title="Consultar Dasboard"  src="images/pesquisa-de-lupa.png" alt="ícone um dashboard"/> Pesquisa <img src="images/seta-direita.png" alt="ícone uma seta para a direita"/>
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink to='/dashboard'>
                            <img title="Consultar Dasboard"  src="images/dashboard.png" alt="ícone um dashboard"/> Dashboard <img src="images/seta-direita.png" alt="ícone uma seta para a direita"/>
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink to='/tabela'>
                            <img title="Consultar Tabela"             src="images/tabela.png" alt="ícone um dashboard"/> Tabela<img           src="images/seta-direita.png" alt="ícone uma seta para a direita"/>
                            </NavLink>
                    </li>

                    <li className="li-usuario">
                        <img title="Usuario"             src="images/usuario.png" alt="ícone um usuario"/>
                    </li>
                    <li className="li">
                        <h2 >Usuario</h2>
                    </li>
                    <li className="li">
                        <img className="sair" title="Sair"             src="images/sair.png" alt="ícone um usuario"/>
                    </li>
                </ul>
            </div>
            <div className='display'>
                <Outlet></Outlet>
            </div>
            
        </div>
    )

}


export default Home;