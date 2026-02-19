describe('Acessibilidade', () => {

beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/login.html')
})

it('VLibras deve existir', () => {
    cy.get('[vw-access-button]').should('exist')
})

it('Botão leitura em áudio deve estar visível', () => {
    cy.contains('Leitura em Áudio').should('be.visible')
})

it('Todos os botões devem ter aria-label', () => {
    cy.get('button').should('have.attr', 'aria-label')
})

})
