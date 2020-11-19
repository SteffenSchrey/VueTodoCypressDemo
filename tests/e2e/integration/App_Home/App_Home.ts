import { Then, When, Before, Given } from 'cypress-cucumber-preprocessor/steps';

Then('The page loads', () => {
  cy.contains('Latest Release');
});
