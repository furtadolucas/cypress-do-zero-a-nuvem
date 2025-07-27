beforeEach(() => {
  cy.visit('../../src/index.html');
});

describe('Central de Atendimento ao Cliente TAT', () => {
  // it('verifica o título da aplicação', () => {
  //   cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
  //   });

  // it('preenche os campos obrigatórios e envia o formulário', () => {
  //   cy.get('[data-cy="input-firstName"]').type("lusca");
  //   cy.get('[data-cy="input-lastName"]').type("lusquinha");
  //   cy.get('[data-cy="input-email"]').type("lucas@lucas.com");
  //   cy.get('[data-cy="input-phone"]').type("11999999999");
  //   cy.get('[data-cy="input-open-text-area"]').type("Teste de envio de formulário com Cypress", { delay: 0 });
  //   cy.get('[data-cy="submit-button"]').click();
  //   cy.get('[data-cy="success-message"]').should('be.visible');

  //   })

  // it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
  //   cy.get('[data-cy="input-firstName"]').type("lusca");
  //   cy.get('[data-cy="input-lastName"]').type("lusquinha");
  //   cy.get('[data-cy="input-email"]').type("lucas@lucas,com");
  //   cy.get('[data-cy="input-phone"]').type("11999999999");
  //   cy.get('[data-cy="input-open-text-area"]').type("Teste de envio de formulário com Cypress", { delay: 0 });
  //   cy.get('[data-cy="submit-button"]').click();
  //   cy.get('[data-cy="error-message"]').should('be.visible');
  // })

  // it ('exibe mensagem de erro quando telefone se torna obrigatório mas não é preenchido', () => {
  //   cy.get('[data-cy="input-firstName"]').type("lusca");
  //   cy.get('[data-cy="input-lastName"]').type("lusquinha");
  //   cy.get('[data-cy="input-email"]').type("lucas@lucas.com");
  //   cy.get('[data-cy="input-open-text-area"]').type("Teste de envio de formulário com Cypress", { delay: 0 });
  //   cy.get('[data-cy="input-phone-checkbox"]').check();
  //   cy.get('[data-cy="submit-button"]').click();
  //   cy.get('[data-cy="error-message"]').should('be.visible');
  // });

  // it ('preenche e limpa os campos nome, email e telefone', () => {
  //   cy.get('[data-cy="input-firstName"]').type('lusca').should('have.value', 'lusca');
  //   cy.get('[data-cy="input-lastName"]').type('lusquinha').should('have.value', 'lusquinha');
  //   cy.get('[data-cy="input-email"]').type('lucas@lucas.com').should('have.value', 'lucas@lucas.com');
  //   cy.get('[data-cy="input-phone"]').type('11999999999').should('have.value', '11999999999');
  //   cy.get('[data-cy="input-firstName"]').clear().should('have.value', '');
  //   cy.get('[data-cy="input-lastName"]').clear().should('have.value', '');
  //   cy.get('[data-cy="input-email"]').clear().should('have.value', '');
  //   cy.get('[data-cy="input-phone"]').clear().should('have.value', '');
  // });/

  it ('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="error-message"]').should('be.visible');
  });


});