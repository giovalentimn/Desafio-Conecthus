describe('Formulario 2 - Campos Diversos', () => {

beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-2.html')
})

it('Validar preenchimento obrigatório do campo Sexo', () => {
    cy.contains('Backend').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Preencher corretamente o campo Sexo, dúvida entrar em requisitos!').should('be.visible')
})

it('Validar seleção de apenas uma opção no campo Sexo', () => {
    cy.contains('Masculino').click()
    cy.contains('Feminino').click()
})

it('Validar seleção correta da opção Masculino', () => {
    cy.contains('Masculino').click()
})

it('Validar seleção correta da opção Feminino', () => {
    cy.contains('Feminino').click()
})

it('Validar preenchimento obrigatório do campo Interesses', () => {
    cy.contains('Feminino').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Selecione ao menos uma opção em Interesses, dúvida entrar em requisitos!').should('be.visible')
})

it('Validar seleção de uma única opção de interesse', () => {
    cy.contains('Backend').click()
})

it('Validar seleção de múltiplas opções de interesse', () => {
    cy.contains('Backend').click()
    cy.contains('QA').click()
    cy.contains('Frontend').click()
})

it('Validar preenchimento obrigatório do campo Data de Nascimento', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Preencher corretamente o campo Data de Nascimento, dúvida entrar em requisitos!').should('be.visible')
})

it('Validar rejeição de data futura', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2030-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Data de Nascimento não pode ser futura!').should('be.visible')
})

it('Validar rejeição para idade menor que 16 anos', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2025-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Idade mínima permitida é de 16 anos!').should('be.visible')
})

it('Validar aceitação de data válida com idade maior ou igual a 16 anos', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Formulário enviado com sucesso!').should('be.visible')
    cy.get('#modalOk').click()
})

it('Validar preenchimento obrigatório do campo Telefone', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Preencher corretamente o campo Telefone, dúvida entrar em requisitos!').should('be.visible')
})

it('Validar aceitação de telefone com 10 dígitos', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('9284166157')
})

it('Validar rejeição de letras no campo Telefone', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('qwertyuio')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Preencher corretamente o campo Telefone, dúvida entrar em requisitos!').should('be.visible')
})

it('Validar preenchimento obrigatório do campo CPF', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('92984166157')
    cy.contains('Enviar').click()
    cy.contains('Preencher corretamente o campo CPF, dúvida entrar em requisitos!').should('be.visible')
})

it('Validar aceitação de CPF com 11 dígitos válidos', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.contains('Formulário enviado com sucesso!').should('be.visible')
})

/*it('Validar rejeição de CPF com menos de 11 dígitos', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20')
    cy.contains('Enviar').click()
    cy.contains('Formulário enviado com sucesso!').should('be.visible')
})

it.only('Validar rejeição de CPF com mais de 11 dígitos', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('2047874505288484848')
    cy.contains('Enviar').click()
    cy.contains('Formulário enviado com sucesso!').should('be.visible')
})*/

it('Validar presença de botão OK na modal de sucesso', () => {
    cy.contains('Feminino').click()
    cy.contains('QA').click()
    cy.get('#dataNascimento').type('2002-04-17')
    cy.get('#telefone').type('92984166157')
    cy.get('#cpf').type('20478745052')
    cy.contains('Enviar').click()
    cy.get('#modalOk').should('be.visible')
})

it('Validar redirecionamento para tela Home ao clicar em Voltar', () => {
    cy.contains('Voltar').click()
    cy.contains('QAPlayground | Ambiente de prática e experimentação para QAs').should('be.visible')
});

})
