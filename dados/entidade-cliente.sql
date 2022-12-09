CREATE DATABASE CadastroCliente;

USE CadastroCliente;


CREATE TABLE CadastroCliente.cliente(
	id INT auto_increment primary key,
    nome varchar(100) not null,
    cpf varchar(11) not null,
    email varchar(45),
    estado_civil varchar(10) not null,
    telefone varchar(11),
    data_nascimento varchar(10) not null,
    genero varchar(20) not null,
    profissao varchar(30) not null
);

select * from cliente;
