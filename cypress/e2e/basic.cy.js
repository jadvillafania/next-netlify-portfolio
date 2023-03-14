describe("sample test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the name", () => {
    cy.get("h1").contains("John Villafania");
  });
  it("displays the content", () => {
    cy.get("p").should("be.visible").contains("Full Stack Developer");
  });
});
