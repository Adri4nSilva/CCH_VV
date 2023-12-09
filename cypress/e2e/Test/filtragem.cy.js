describe("Filtragem", () => {
    it("Efetuar a filtragem dos produtos", () => {
        cy.visit("https://www.magazineluiza.com.br/");
        cy.get('a[href="https://www.magazineluiza.com.br/selecao/ofertasdodia/"]').click();
    })
})
