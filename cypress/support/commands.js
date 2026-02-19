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

Cypress.Commands.add('uploadArquivo', (seletor, arquivo) => {
    cy.get(seletor).selectFile(`cypress/fixtures/files/${arquivo}`, { force: true })
})

