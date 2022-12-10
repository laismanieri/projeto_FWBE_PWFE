import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';

import './Modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

   

const ModalEdit = (props) =>{

  function afterOpenModal() {
  }

  function closeModal() {
    props.setStatus(false);
  }

  const editaCliente = () => {

    let url = `http://localhost:8080/cliente/${props.idItem}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: document.getElementById("nome").value,
        cpf:document.getElementById("cpf").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        genero:document.getElementById("genero").value,
        estadoCivil: document.getElementById("estadoCivil").value,
        email: document.getElementById("email").value,
        telefone:document.getElementById("telefone").value,
        profissao: document.getElementById("profissao").value
      })
    }) 
        .then((response) => response.json())
    .then((dado) => {
      console.log(dado);
    })
    .catch((erro)=>{
        console.log(erro)
    })
 };   

 const [dados, setDados] = useState([]); 

  
    useEffect(() =>{
        let url =`http://localhost:8080/cliente/${props.idItem}`;
              
        fetch(url) 
            .then((response) => response.json())
                .then(json => {
                // Do something with the data
                  setDados(json)  
                  console.log(json);
                })
                .catch((erro) =>{
                    console.log(erro)
                });
    });

  

  return (
    <div className='modal'>
      <Modal
        isOpen={props.status}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className='button' onClick={closeModal}>
          <img title="cancelar" class="icones" src="images/cancelar.png" alt="ícone de fechar/cancelar"/></button>
        <div className='cadastro'></div>
        <form className='form2' on>
        
            <div >
                <div>
                  <label>Id:</label></div>
                <div>
                    <input value={props.idItem} className='input' type="number"/>
                </div>
            </div>
            
            <div>
                <div>
                  <label>Nome:</label></div>
                <div>
                    <input defaultValue={dados.nome} className='input' type="text" id="nome" required/>
                </div>
            </div>
          
            <div>
                <div>
                  <label>CPF:</label></div>
                <div>
                    <input className='input'  type="text" id="cpf"  defaultValue={dados.cpf} required/>
                </div>
            </div>

            <div>
                <div>
                  <label>Data de Nascimento:</label>
                </div>
                <div>
                    <input className='input'  type="text" id="dataNascimento" defaultValue={dados.dataNascimento} required/>
                </div>
            </div>
            
            <div>
                <div>
                  <label>Genêro:</label>
                </div>
                <div>
                    <select className='select'  id="genero" defaultValue={dados.genero}>
                        <option>Mulher Cisgênero</option>
                        <option>Mulher Transgênero</option>
                        <option>Homem Cisgênero</option>
                        <option>Homem Transgênero</option>
                        <option>Não Binário</option>
                        <option>Outros</option>
                    </select>
                </div>
            </div>
            
            <div>
                <div>
                  <label>Estado Civil:
                  </label>
                </div>
                <div>
                    <select className='select'  id="estadoCivil" defaultValue={dados.estadoCivil}>
                        <option>Casado(a)</option>
                        <option>Solteiro(a)</option>
                        <option>Divorciado(a)</option>
                        <option>Viúvo(a)</option>
                        <option>União Estável</option>
                        <option>Outros</option>
                    </select>
                </div>
            </div>
           
            <div>
                <div><label>E-mail:</label></div>
                <div>
                    <input className='input'  type="email" id="email"  defaultValue={dados.email} required/>
                </div>
            </div>

            <div>
                <div>
                  <label>Telefone principal:
                  </label>
                </div>
                <div>
                    <input className='input'  type="tel" id="telefone" defaultValue={dados.telefone} required/>
                </div>
            </div>
            
            <div>
                <div>
                  <label>
                    Profissão:
                  </label>
                </div>
                <div>
                    <input className='input'  type="text" id="profissao"  defaultValue={dados.profissao} required/>
                </div>
            </div>
            <div class="form-botao">
                <div>
                    <Button className='enviar' title="Salvar" type="submit"
                     onClick={() => {editaCliente()}} 
                     >
                      Salvar
                    </Button>
                </div>
            </div>
          
        </form>
      </Modal>
    </div>
  );
}

export default ModalEdit;