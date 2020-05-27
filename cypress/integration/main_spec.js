describe('e2e test', () => {
  it('open movie details', () => {
    cy.visit('http://localhost:8080/');
    cy.get('.poster').first().click();
    expect(cy.get('.infopanel__title')).to.exist;
  });
});
