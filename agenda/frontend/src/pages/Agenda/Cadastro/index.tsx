import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Cadastro:React.FC = () =>{
 function  handleclick (){
    console.log('awui');
 }
 
return <>
<h2>Novo Contato</h2>
<Form>
<Form.Group className="mb-3" controlId="formNome">
    <Form.Label>Nome</Form.Label>
    <Form.Control type="nome" placeholder="Nome" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
    <Form.Text className="text-muted">
      Digite um email válido.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formTelefone">
    <Form.Label>Telefone</Form.Label>
    <Form.Control type="telefone" placeholder="(00)00000-0000" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formImage">
    <Form.Label>Foto</Form.Label>
    <Form.Control type="foto" placeholder="https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg" />
    <Form.Text className="text-muted">
    Esse é um campo opcional
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleclick}>
    Salvar
  </Button>
</Form>


</>
}
export default Cadastro;