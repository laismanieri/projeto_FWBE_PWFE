import Modal from 'react-modal';

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

const ModalAdd = (props) =>{
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    props.setStatus(false);
  }

  const cadastraCliente = () => {

    let url ='http://localhost:8080/cliente';
    fetch(url, {
      method: 'POST',
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
} 

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
          <img title="cancelar"  src="images/cancelar.png" alt="ícone de fechar/cancelar"/>
        </button>

        <div className='cadastro' id='cadastro'></div>

        <form className='form'>
          <div>
            <label>Nome:</label>
            <br/>
            <input className='input'  type="text" id="nome"     placeholder="Nome Completo" required/>
          </div>
          <div>
            <label>CPF:</label>
            <br/>
            <input className='input' type="text" id="cpf"          placeholder="Cadastro de Pessoas Física" required/>
          </div>
          <div>
            <label>Data de Nascimento:</label>
            <br/>
            <input className='input' type="text"  id="dataNascimento"  placeholder="O ano em que nasceu. (Exemplo AAAA-MM-DD)" required/>
          </div>
          <div>
            <label>Genêro:</label>
            <br/>
            <select className='select' id="genero" >
              <option>Mulher Cisgênero</option>
              <option>Mulher Transgênero</option>
              <option>Homem Cisgênero</option>
              <option>Homem Transgênero</option>
              <option>Não Binário</option>
              <option>Outros</option>
            </select>
          </div>
          <div>
            <label>Estado Civil:</label>
            <br/>
            <select className='select' id="estadoCivil" >
              <option>Casado(a)</option>
              <option>Solteiro(a)</option>
              <option>Divorciado(a)</option>
              <option>Viúvo(a)</option>
              <option>União Estável</option>
              <option>Outros</option>
            </select>
          </div>
          <div>
            <label>E-mail:</label>
            <br/>
            <input className='input' type="email" id="email"           placeholder="example@example.com" required/>
          </div>
          <div>
            <label>Telefone principal:</label>
            <br/>
            <input className='input' type="tel" id="telefone"     placeholder="DDD + Número de telefone" required/>
          </div>
          <div>
            <label>Profissão:</label>
            <br/>
            <input className='input' type="text" id="profissao"     placeholder="Profissao" required/>
          </div>
          <div>
            <button className='enviar'
              onClick={() => {cadastraCliente()}}
              variant="light">Enviar</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ModalAdd;