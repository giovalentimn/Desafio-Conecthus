describe('Cadastro', () => {

beforeEach(() => {
    cy.visit("https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/cadastro.html")
})

it('Nome vazio', () => {
    cy.get('#nome').clear()
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Preencher corretamente o campo Nome').should('be.visible')
})

it('Nome com apenas um nome', () => {
    cy.get('#nome').type('Giovanna')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Preencher corretamente o campo Nome').should('be.visible')
})

it('Nome com números', () => {
    cy.get('#nome').type('Giovanna 123')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Preencher corretamente o campo Nome').should('be.visible')
})

it('Nome com caracteres especiais', () => {
    cy.get('#nome').type('Giovanna @#$')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Preencher corretamente o campo Nome').should('be.visible')
})

it('Email vazio', () => {
    cy.get('#nome').type('Giovanna Valentim')
    cy.get('#email').clear()
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Preencher corretamente o campo E-mail').should('be.visible')
})

it('Email sem @', () => {
    cy.get('#nome').type('Giovanna Valentim')
    cy.get('#email').type('testegmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Preencher corretamente o campo E-mail').should('be.visible')

})

it('Senha vazia', () => {
    cy.get('#nome').type('Giovanna Valentim')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').clear()
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Preencher corretamente o campo Senha').should('be.visible')

})

it('Senha sem número', () => {
    cy.get('#nome').type('Giovanna Valentim')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi')
    cy.get('#confirmarSenha').type('Teste@gi')
    cy.contains('Cadastrar').click()
    cy.contains('Preencher corretamente o campo Senha').should('be.visible')
})

it('Senhas diferentes', () => {
    cy.get('#nome').type('Giovanna Valentim')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi12')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('As senhas não conferem').should('be.visible')
})

it('Senhas iguais', () => {
    cy.get('#nome').type('Giovanna Valentim')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Cadastro realizado com sucesso!').should('be.visible')
})

it('Ver usuário com dados no localStorage', () => {
    cy.get('#nome').type('Giovanna Valentim')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Cadastro realizado com sucesso!').should('be.visible')
    cy.get('#modalOk').click()
    cy.contains('Ver Usuário Salvo').click()
    cy.contains('Usuário salvo').should('be.visible')
})

it('Limpar cadastro existente', () => {
    cy.get('#nome').type('Giovanna Valentim')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#confirmarSenha').type('Teste@gi123')
    cy.contains('Cadastrar').click()
    cy.contains('Cadastro realizado com sucesso!').should('be.visible')
    cy.get('#modalOk').click()
    cy.contains('Limpar Cadastro').click()
    cy.contains('Cadastro removido do armazenamento local.').should('be.visible')
})

})