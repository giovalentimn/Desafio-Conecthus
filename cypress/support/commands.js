Cypress.Commands.add('mockUsuario', () => {

const usuario = {
    nome: "Giovanna Valentim",
    email: "dantasgiovanna64@gmail.com",
    senha: "Teste@gi123"
}

cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/login.html')

cy.window().then((win) => {
    win.localStorage.setItem('qaplayground_usuario', JSON.stringify(usuario))
})

})

Cypress.Commands.add('aguardarPaginaCarregada', () => {
    cy.get('input#\\:r0\\:', { timeout: 1000 }).should('be.visible');
});

Cypress.Commands.add('verificaToastLogin', (mensagem) => {
cy.get('div[role="alert"]')
    .should('be.visible')
    .and('contain', mensagem);
});

Cypress.Commands.add('verificaToastLogout', (mensagem) => {
cy.get('div[role="alert"]')
    .should('be.visible')
    .and('contain', mensagem);
});

Cypress.Commands.add('aguardarPagina', () => {
    cy.wait(1000)
});
