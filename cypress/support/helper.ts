import * as h from "../support/constants";
import locators from "../support/pageElemet";
/**
 * Method to validate the header text of page
 * @param element header's element
 * @param elementText header's text to verify
 */
export const validateHeaderText = (element: string, elementText: string) => {
  cy.log("Validating " + elementText);
  cy.get(element)
    .should("be.visible")
    .contains(elementText);
};

/**
 * Method to click button
 * @param locator Button's element
 * @param elementText Button's text to verify
 */
export const clickButton = (locator: string, elementText: string) => {
  cy.log("clicking element: " + elementText);
  cy.get(locator)
    .contains(elementText)
    .click();
};

/**
 * Method to Enter text in element
 * @param $container container of textbox
 * @param locator Button's element
 * @param elementText Button's text to verify
 */
export const enterText = (
  $container: JQuery,
  element: string,
  text: string
) => {
  cy.wrap($container.contents().find("body"))
    .find(element)
    .type(text, { force: true });
};

/**
 * Method to select value of dropdown
 * @param $container container of dropdown
 * @param locator dropdown element
 * @param value dropdown's value to select
 */
export const selectValue = (
  $container: JQuery,
  element: string,
  value: string
) => {
  cy.wrap($container.contents().find("body"))
    .find(element)
    .select(value, { force: true });
};

/**
 * Method to fill form data
 * @param $container container of iframe
 * @param formData string array
 */
export const fillWatchDemoForm = ($container: JQuery, formData: string[]) => {
  formData.forEach(data => {
    let keyval = data.split(";");
    cy.log(keyval[0]);
    if (keyval[0].includes("Country"))
      selectValue($container, keyval[0], keyval[1]);
    else enterText($container, keyval[0], keyval[1]);
  });
};

/**
 * Array of watch Demo form data [locators and locators value]
 */
export const watchDemoFormData = [
  locators.txt_Firstname + ";" + h.firstName,
  locators.txt_Lastname + ";" + h.lastName,
  locators.txt_Email + ";" + h.emailID,
  locators.txt_JobTitle + ";" + h.jobTitle,
  locators.txt_Company + ";" + h.company,
  locators.txt_Phone + ";" + h.phoneNumber,
  locators.ddl_Country + ";" + h.country,
  locators.txtArea_Comments + ";" + h.comments
];
