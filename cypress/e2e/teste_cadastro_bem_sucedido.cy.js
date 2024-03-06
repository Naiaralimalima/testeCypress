describe('Página de cadastro', () => {
    it('Preencher os camopos do formulário corretamnete para cadastrar um novo usuário', () => {
  
      //teste de cadastro ct001.001 cadastro bem-sucedido
      cy.visit('https://paciente.lacreisaude.com.br/')
      cy.contains('button','Criar conta').click();
      cy.get('#first_name').type('Naiara');
      cy.get('#last_name').type('Lima');
      cy.get('#email').type('naicardoso144@gmail.com');
      cy.get('#password1').type('12062011Na@');
      cy.get('#password2').type('12062011Na@');
      cy.get('label').contains('Li e concordo').click();
      cy.get('label').contains('Tenho 18 anos ou mais').click();
      cy.contains('button','Cadastrar').click();
  
      
    })
  })
  