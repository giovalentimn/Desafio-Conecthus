describe('Login', () => {

beforeEach(() => {
  cy.mockUsuario()
})

  it('Validar usuário vazio ao tentar logar', () => {
    cy.get('#usuario').clear()
    cy.get('#senha').type('Teste@gi123')
    cy.contains('Entrar').click()
    cy.contains('Preencher corretamente o campo Usuário').should('be.visible')
  });

  it('Validar usuário sem “@”', () => {
    cy.get('#usuario').type('dantasgiovanna64gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.').should('be.visible')
  });

  it('Validar usuário sem domínio válido', () => {
    cy.get('#usuario').type('dantasgiovanna64@')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.').should('be.visible')
  });

  it('Validar usuário com espaço em branco', () => {
    cy.get('#usuario').type('dantasgiovanna64   @gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.').should('be.visible')
  });

  it('Validar usuário com mais de 64 caracteres', () => {
    cy.get('#usuario').type('dantasgiovanna64@gmail.comdantasgiovanna64@gmail.comdantasgiovanna64@gmail.comdantasgiovanna64@gmail.comdantasgiovanna64@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.').should('be.visible')
    });

  it('Permitir usuário com e-mail válido', () => {
    cy.get('#usuario').type('teste  teste  ')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.').should('be.visible')
  });

    it('Validar senha vazia', () => {
    cy.get('#usuario').type('Teste@gmail.com')
    cy.get('#senha').clear()
    cy.contains('Entrar').click()
    cy.contains('Preencher corretamente o campo Senha').should('be.visible')
  });

  it('Validar senha sem número', () => {
    cy.get('#usuario').type('dantasgiovanna64@gmail.com')
    cy.get('#senha').type('SenhaErrada@123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.')
      .should('be.visible')
  });

  it('Validar senha sem letra maiúscula', () => {
    cy.get('#usuario').type('dantasgiovanna64@gmail.com')
    cy.get('#senha').type('TESTE@gi123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.')
      .should('be.visible')
  });

  it('Validar senha sem caractere especial', () => {
    cy.get('#usuario').type('dantasgiovanna64@gmail.com')
    cy.get('#senha').type('Testegi123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.')
      .should('be.visible')
  });

  it('Validar senha com menos de 6 caracteres', () => {
    cy.get('#usuario').type('dantasgiovanna64@gmail.com')
    cy.get('#senha').type('Teste')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.')
      .should('be.visible')
  });

  it('Validar senha com mais de 12 caracteres', () => {    
    cy.get('#usuario').type('dantasgiovanna64@gmail.com')
    cy.get('#senha').type('Teste@gi1234')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.')
      .should('be.visible')
  });

  it('Exibir senha ao clicar no ícone mostrar senha', () => {
    cy.get('#usuario').type('dantasgiovanna64@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#toggleSenha').click()
    cy.get('#senha').should('be.visible')
  });

  it('Ocultar senha ao desativar o ícone mostrar senha', () => {
    cy.get('#usuario').type('dantasgiovanna64@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#toggleSenha').click()
    cy.get('#senha').should('be.visible')
  });

  it('Permitir senha válida', () => {
    cy.get('#usuario').type('dantasgiovanna64@gmail.com')
    cy.get('#senha').type('Teste@gi123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Login realizado com sucesso!')
      .should('be.visible')
  });

  it('Bloquear login com campos vazios', () => {    
    cy.get('#usuario').click()
    cy.get('#senha').click()
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Preencher corretamente o campo Usuário')
      .should('be.visible')
  });

  it('Exibir erro ao informar usuário inexistente', () => {
    cy.get('#usuario').type('teste@gmail.com')
    cy.get('#senha').type('teste123')
    cy.get('#captcha').click()
    cy.contains('Entrar').click()
    cy.contains('Usuário ou senha inválidos. Tente novamente.')
      .should('be.visible')
  });

  it('Voltar para página inicial', () => {
    cy.contains('Voltar').click()
    cy.contains('Bem-vindos ao QAPlayground').should('be.visible')
  });

});
