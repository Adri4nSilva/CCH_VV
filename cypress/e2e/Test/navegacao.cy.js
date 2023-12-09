describe("Navegação", () => {
    it("Realizar Navegação e Ordenação da lista de produtos", () => {
        cy.visit("https://www.magazineluiza.com.br/");
        cy.get("#input-search")
            .type("Apple iPhone 13 128GB Estelar Tela 6,1” 12MP")
            .type("{enter}");
        cy.get(
            'img[title="Apple iPhone 13 128GB Estelar Tela 6,1” 12MP"]'
        ).should("be.visible");
        cy.get("option").contains("Relevância");
        cy.get("option").contains("Relevância").click({ force: true });
    });
});