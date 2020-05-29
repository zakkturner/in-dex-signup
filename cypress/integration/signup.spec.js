describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000"); // change URL to match your dev URL
  });
});

describe("Email test", () => {
  it("Accepts email", () => {
    cy.get("#email")
      .type("email@gmail.com")
      .should("have.value", "email@gmail.com");
  });
});
describe("Checkbox", () => {
  it("Accepts check", () => {
    cy.get("#checkbox").click();
  });
});

describe("Button Test", () => {
  it('Contains "Next" and does not run without inputs filled', () => {
    cy.contains("Next");
    cy.get("#submit").click();
  });
});

describe("Second Step", () => {
  it("Accepts First and last name", () => {
    cy.get("#firstName").type("Zak").should("have.value", "Zak");

    cy.get("#lastName").type("Tee").should("have.value", "Tee");

    cy.contains("Sign Up");
    cy.get("#submit").click();
  });
});
