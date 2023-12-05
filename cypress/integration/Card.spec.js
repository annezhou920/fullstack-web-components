describe('CardComponent', () => {
    beforeEach(() => {
        cy.visit("iframe.html?id=components-card--image-card");
    })
    it('should find slots in the card', () => {
        cy.get('in-card').shadow().find('slot[name="header"]').should('exist');
        cy.get('in-card').shadow().find('slot[name="content"]').should('exist');
        cy.get('in-card').shadow().find('slot[name="footer"]').should('exist');
    });

    it('should find the card slot content in light DOM', () => {
        cy.get('#root').find('slot[name="header"]').get('img').should('exist');
        cy.get('#root').find('slot[name="header"]').contains('Food');
        cy.get('#root').find('slot[name="content"]').contains('Lorem ipsum');
        cy.get('#root').find('slot[name="footer"]').contains('Read');
    });
});