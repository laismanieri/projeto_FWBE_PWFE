import { useState,useEffect, useRef } from "react";
import SearchResults from "../Components/SearchResults";

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';


const Search = () =>{

    const [cliente,setcliente] = useState([]);
  
        useEffect(() =>{
            let url ='http://localhost:8082/cliente';
            
    
            fetch(url
                ,  {method: 'GET',
    
                    }
                    )
                .then((response) => response.json())
                    .then(json => {
                    // Do something with the data
                        setcliente(json);
                    })
                    .catch((erro) =>{
                        console.log(erro)
                    });
        },[]);
  
    return (
     <div>   
        <h1>Pesquisa</h1>
        <form>
            <input name="search" id="search"  />
        </form>
        <Table className='table' striped bordered  hover >
        <thead className='thead'>
            <tr className='tr'>
                <th className='th'>#</th>
                <th className='th'>Nome</th>
                <th className='th'>CPF</th>
                <th className='th'>Data Nascimento</th>
                <th className='th'>Genêro</th>
                <th className='th'>Estado Civil</th>
                <th className='th'>E-mail</th>
                <th className='th'>Telefone</th>
                <th className='th'>Profissão</th>
                <th className='th'>Editar </th>
            </tr>
        </thead>
        <tbody className='tbody'>
            {
                cliente.map((dado) => {
                    return (
                        <tr className='tr' key={dado.id}>
                            <td  className='td'>{dado.id}</td>
                            <td  className='td'>{dado.nome}</td>
                            <td  className='td'>{dado.cpf}</td>
                            <td  className='td'>{dado.dataNascimento}</td>
                            <td  className='td'>{dado.genero}</td>
                            <td  className='td'>{dado.estadoCivil}</td>
                            <td  className='td'>{dado.email}</td>
                            <td  className='td'>{dado.telefone}</td>
                            <td  className='td'>{dado.profissao}</td>
                            <td  className='td'>
                            </td>
                        </tr>
                    )
                })
            }

        </tbody>
    </Table>
    </div>   
    );
  }
  

export default Search;