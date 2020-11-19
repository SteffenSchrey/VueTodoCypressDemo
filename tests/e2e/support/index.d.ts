declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Login Shortcut
     * @example
     * cy.login()
     */
    login(): Chainable;
    /**
     * Get an object which has the attribute: data-cy="<name>"
     * @example
     * cy.getElement("author");
     * cy.getElement<Input>("title");
     */
    getElement<K extends keyof HTMLElementTagNameMap>(
      name: string,
    ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;
    getElement<E extends Node = HTMLElement>(name: string): Chainable<JQuery<E>>;
    getElement<T = any>(name: string): Chainable<T>;
    /**
     * Finds an object which has the attribute: data-cy="<name>" inside another Element with data-cy="<name>"
     * @example
     * cy.getElementChild("author", "book");
     */
    getElementChild<K extends keyof HTMLElementTagNameMap>(
      parent: string,
      child: string,
    ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;
    getElementChild<E extends Node = HTMLElement>(
      parent: string,
      child: string,
    ): Chainable<JQuery<E>>;
  }
}

declare module 'cypress-terminal-report' {
  export function installSupport(): any;
}

declare module 'cypress-terminal-report/src/installLogsCollector';
