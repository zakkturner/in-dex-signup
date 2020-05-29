describe("Email test", () => {
  it("Accepts email");
  cy.get("#email")
    .type("email@gmail.com")
    .should("have.value", "email@email.com");
});
