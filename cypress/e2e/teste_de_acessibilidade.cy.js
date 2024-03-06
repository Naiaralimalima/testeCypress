import 'cypress-axe';

describe('teste de acessibilidade',() => {
    beforeEach(() => {
        cy.visit('https://paciente.lacreisaude.com.br/');
        cy.injectAxe();
    });
    
    it('Deve passar no teste de Acessibilidade',() => {

        cy.checkA11y();
    });
});