describe('teste de responsividade mobile',() => {
    const devices = [
        {name : 'iPhone X', width: 375, height: 812 },
        {name : 'Samsung Galaxi S10', width: 360, height: 760 },
    ];


    devices.forEach (device => {
        context(device.name, () => {
            beforeEach(() => {
                cy.viewport(device.width, device.height);
                cy.visit('https://paciente.lacreisaude.com.br/');

            });
            it(`Deve exibir corretamnete em dispositivos ${device.name}`, () => {


                cy.get('#email').type('naicardoso144@gmail.com').should('be.visible');
                cy.get('#password').type('12062011nA@').should('be.visible');
                cy.contains('button','Entrar').click().should('be.visible');
            });
        });
    });
});
