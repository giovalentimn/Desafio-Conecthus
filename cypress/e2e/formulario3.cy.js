describe('Formulario 3 - Testes completos', () => {

beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-3.html')
})

  // ---------------- PDF ----------------

it('PDF válido', () => {
    cy.get('#arquivoPdf').selectFile('cypress/fixtures/files/pdf.pdf', { force: true })
    cy.contains('Arquivo selecionado corretamente!')
})

it('PDF vazio obrigatório', () => {
    cy.contains('Enviar').click()
    cy.contains('Existem campos inválidos.')
})

it('PDF extensão errada', () => {
    cy.get('#arquivoPdf').selectFile('cypress/fixtures/files/jpg.jpg', { force: true })
    cy.contains('Campo para arquivo PDF')
})

it('PDF maiúsculo', () => {
    cy.get('#arquivoPdf').selectFile('cypress/fixtures/files/PDF CÓPIA.pdf', { force: true })
    cy.contains('Arquivo selecionado corretamente!')
})

it('PDF fake renomeado', () => {
    cy.get('#arquivoPdf').selectFile('cypress/fixtures/files/fake.pdf.txt', { force: true })
    cy.contains('Campo para arquivo PDF')
})

it('PDF borda vermelha', () => {
    cy.get('#arquivoPdf').selectFile('cypress/fixtures/files/jpg.jpg', { force: true })
    cy.get('#modalOkErro').click()
    cy.get('#arquivoPdf').should('have.class', 'erro')
})

it('PDF borda verde', () => {
    cy.get('#arquivoPdf').selectFile('cypress/fixtures/files/pdf.pdf', { force: true })
    cy.get('#modalOk').click()
    cy.get('#arquivoPdf').should('have.class', 'sucesso')
})

  // ---------------- DOCX ----------------

it('DOCX válido', () => {
    cy.get('#arquivoDocx').selectFile('cypress/fixtures/files/doc.docx', { force: true })
    cy.contains('Arquivo selecionado corretamente!')
})

it('DOCX inválido', () => {
    cy.get('#arquivoDocx').selectFile('cypress/fixtures/files/jpg.jpg', { force: true })
    cy.contains('Campo para arquivo DOCX')
})

it('DOCX corrigido', () => {
    cy.get('#arquivoDocx').selectFile('cypress/fixtures/files/jpg.jpg', { force: true })
    cy.get('#modalOkErro').click()
    cy.get('#arquivoDocx').selectFile('cypress/fixtures/files/doc.docx', { force: true })
    cy.contains('Arquivo selecionado corretamente!')
})

  // ---------------- JPG ----------------

it('JPG válido', () => {
    cy.get('#arquivoJpg').selectFile('cypress/fixtures/files/jpg.jpg', { force: true })
    cy.contains('Arquivo selecionado corretamente!')
})

it('JPG inválido', () => {
    cy.get('#arquivoJpg').selectFile('cypress/fixtures/files/pdf.pdf', { force: true })
    cy.contains('Campo para arquivo JPG')
})

  // ---------------- XLSX ----------------

it('XLSX válido', () => {
    cy.get('#arquivoXlsx').selectFile('cypress/fixtures/files/planilha.xlsx', { force: true })
    cy.contains('Arquivo selecionado corretamente!')
})

it('XLSX inválido', () => {
    cy.get('#arquivoXlsx').selectFile('cypress/fixtures/files/jpg.jpg', { force: true })
    cy.contains('Campo para arquivo XLSX')
})

  // ---------------- TXT ----------------

it('TXT válido', () => {
    cy.get('#arquivoTxt').selectFile('cypress/fixtures/files/texto.txt', { force: true })
    cy.contains('Arquivo selecionado corretamente!')
})

it('TXT inválido', () => {
    cy.get('#arquivoTxt').selectFile('cypress/fixtures/files/jpg.jpg', { force: true })
    cy.contains('Campo para arquivo TXT')
})

  // ---------------- LOCALIZAÇÃO ----------------

it('Selecionar país estado cidade corretamente', () => {
    cy.get('#pais').select(1)
    cy.get('#estado').select(1)
    cy.get('#cidade').select(1)
    cy.contains('Localização selecionada corretamente!')
})

it('Sem país', () => {
    cy.get('#pais').select(1)
    cy.get('#estado').select(1)
    cy.get('#pais').select(0)
    cy.get('#estado').should('have.class', 'erro')
})

it('Alterar país limpa estado e cidade', () => {
    cy.get('#pais').select(1)
    cy.get('#estado').select(1)
    cy.get('#cidade').select(1)
    cy.get('#modalOk').click()
    cy.get('#pais').select(2)
    cy.get('#estado').should('have.value', '')
    cy.get('#cidade').should('have.value', '')
})

  // ---------------- ENVIO ----------------

it('Enviar tudo válido', () => {
    cy.get('#arquivoPdf').selectFile('cypress/fixtures/files/pdf.pdf', { force: true })
    cy.get('#arquivoDocx').selectFile('cypress/fixtures/files/doc.docx', { force: true })
    cy.get('#arquivoJpg').selectFile('cypress/fixtures/files/jpg.jpg', { force: true })
    cy.get('#arquivoXlsx').selectFile('cypress/fixtures/files/planilha.xlsx', { force: true })
    cy.get('#arquivoTxt').selectFile('cypress/fixtures/files/texto.txt', { force: true })
    cy.get('#modalOk').click()

    cy.get('#pais').select(1)
    cy.get('#estado').select(1)
    cy.get('#cidade').select(1)
    cy.get('#modalOk').click()

    cy.contains('Enviar').click()
    cy.contains('Formulário enviado com sucesso!')
})

it('Voltar para página inicial', () => {
    cy.contains('Voltar').click()
    cy.contains('Bem-vindos ao QAPlayground').should('be.visible')
});

})
