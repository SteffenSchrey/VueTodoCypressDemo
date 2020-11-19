import { Given, Then, Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
});

Given('I open the home page', () => {
  cy.visit('/');
});

Given('I open the {string} page', (title) => {
  cy.visit('/' + title);
});

Then('Scroll {string} to the {string}', (className, direction) => {
  cy.get(className).scrollTo(direction, { duration: 2000, ensureScrollable: false });
});
