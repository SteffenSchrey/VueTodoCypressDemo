import { Then, When, Before, Given } from "cypress-cucumber-preprocessor/steps";

When("I create a {string} Todo", (todo) => {
  cy.get("#newTodo")
    .click()
    .type(todo)
    .type("{enter}");
});

Then("{string} todos are in the list", (numberOfTodos) => {
  cy.get(".mx-12")
    .contains(numberOfTodos + " Tasks");
});

When("a todo is clicked",()=>{
  cy.getElement("checkTodo").first().next().click();
});

Then("the todo is done",()=>{
  cy.getElement("todoText").first().should("have.css", "text-decoration", "line-through solid rgba(0, 0, 0, 0.87)");
});

When("a delete button is clicked",()=>{
  cy.getElement("deleteTodoButton").first().click();
});
