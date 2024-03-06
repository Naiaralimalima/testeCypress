describe('Página de cadastro', () => {

    beforeEach(() => {
      cy.visit('https://paciente.lacreisaude.com.br/')

    })
      const usuarios = require('../fixtures/usuarios.json')
      usuarios.forEach(usuario => { 
        it('Preencher os camopos do formulário corretamnete para cadastrar um novo usuário', () => {
  
          //teste de cadastro ct001.001 cadastro bem-sucedido
          cy.contains('button','Criar conta').click();
          cy.get('#first_name').type(usuario.first_name);
          cy.get('#last_name').type(usuario.last_name);
          cy.get('#email').type(usuario.email);
          cy.get('#password1').type(usuario.password1);
          cy.get('#password2').type(usuario.password2);
          cy.get('label').contains('Li e concordo').click();
          cy.get('label').contains('Tenho 18 anos ou mais').click();
          cy.contains('button','Cadastrar').click();
      
          
        })
       })

          
        
       

    
  })
