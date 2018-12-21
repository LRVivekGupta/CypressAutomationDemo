/**
 * Method to validate the element text
 * @param element header's element
 * @param elementText header's text to verify
 */
export const validateText = (element: string, text: string) => {
  cy.log("Validating element with text: " + text);
  cy.get(element).should("contain", text);
};

/**
 * Method to click button
 * @param locator Button's element
 * @param elementText Button's text to verify
 */
export const clickButton = (locator: string, text: string) => {
  cy.log("clicking element with text: " + text);
  cy.get(locator)
    .contains(text)
    .click();
};

/**
 * Method to set text in TextBox
 * @param $container container of textbox
 * @param locator Button's element
 * @param elementText Button's text to verify
 */
export const setText = ($container: JQuery, locator: string, text: string) => {
  cy.log("Setting text of an element: " + text);
  cy.wrap($container.contents().find("body"))
    .find(locator)
    .type(text, { force: true });
};

/**
 * Method to select value from dropdown
 * @param $container container of dropdown
 * @param locator dropdown element
 * @param value dropdown's value to select
 */
export const selectDropdownValue = (
  $container: JQuery,
  locator: string,
  value: string
) => {
  cy.wrap($container.contents().find("body"))
    .find(locator)
    .select(value, { force: true });
};
