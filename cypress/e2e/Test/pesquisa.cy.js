describe("Pesquisa de Produtos", () => {
    it("Realizar uma pesquisa por um produto específico", () => {
        cy.visit("https://www.magazineluiza.com.br");
        cy.get("#input-search").click();
        cy.get("#input-search")
            .type("controle")
            .type("{enter}");
    });
})