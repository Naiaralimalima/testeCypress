describe('Teste de desempenho, tempo de carregamnto', () => {
    it('Deve carregar a página dentro do tempo esperado',() => {
        cy.visit('https://paciente.lacreisaude.com.br/', { timeout: 10000 });
        cy.get('body',{timeout: 10000 }).should('be.visible');

    });
});
