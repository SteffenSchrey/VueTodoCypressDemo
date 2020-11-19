import * as cyTerminalReport from 'cypress-terminal-report/src/installLogsCollector';

cyTerminalReport();
console.log(cyTerminalReport);

Cypress.Commands.add('getElement', <T = any>(name: string) => {
  return cy.get<T>(`[data-cy=${name}]`);
});

Cypress.Commands.add('getElementChild', (parent: string, child: string) => {
  return cy.getElement(parent).find(`[data-cy=${child}]`);
});

Cypress.on('window:before:load', (window) => {
  const original = window.addEventListener;
  window.addEventListener = function (...args: Parameters<typeof window.addEventListener>) {
    if (args.length > 0 && args[0] === 'beforeunload') {
      return;
    }
    return original.apply(this, args);
  };
});
