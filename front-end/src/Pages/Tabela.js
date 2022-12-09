import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import './Tabela.css';
import './next.config.js';

import ModalAdd from '../Components/Modals/ModalAdd';
import ModalEdit from '../Components/Modals/ModalEdit';

const deletaCliente = id => {
    console.log(id)
    let url = `http://localhost:8080/cliente/${id}`;
    fetch(url,            
        {method: 'DELETE'
         })
    .then((response) => response.json())
    .then((dado) => {
      console.log(dado);
    })
    .catch((erro)=>{
        console.log(erro)
    })
 };    



const Tabela = () => {

    const [cliente,setcliente] = useState([]);
    const [idcliente,setIDcliente] = useState();

    useEffect(() =>{
        let url ='http://localhost:8080/cliente';
        

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

    const [modalIsOpenA, setIsOpenA] = useState(false);
    const [modalIsOpenB, setIsOpenB] = useState(false);

    function openModalA() {
        setIsOpenA(true);
    }
    // dado.id -> indentificador
    function openModalB(identificador) { 
        // identificador -> idcliente
        setIDcliente(identificador);
        setIsOpenB(true);
    }  
          
    return (
        <div className='div'>
            <ModalAdd status={modalIsOpenA} setStatus={setIsOpenA}></ModalAdd>
            <ModalEdit idItem={idcliente} status={modalIsOpenB} setStatus={setIsOpenB}></ModalEdit>

            <Button className='botaoAdiciona' variant="light" size="lg" onClick={openModalA}>
                <img title="Cadastrar Novo Cliente" class="icones" src="images/adicionar-pessoas.png" alt="ícone de pessoa com sinal de mais, que permite adicionar mais clientes"/>
            </Button>
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
                                    <Button className='botaoEdita' variant="light" onClick={() => {openModalB(dado.id, dado.nome)}}>
                                        <img title="Editar" src="images/lapis.png" alt="Botão para editar cliente"/>
                                    </Button>
                                    <Button className='botao' variant="light"  onClick={() => {deletaCliente(dado.id)}}>
                                        <img title="Excluir" src="images/lixeira-de-reciclagem.png" alt="Botão para excluir cliente"/>
                                    </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Tabela;