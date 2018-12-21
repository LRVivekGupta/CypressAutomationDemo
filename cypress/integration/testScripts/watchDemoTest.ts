import * as constants from "../../common/constants";
import { logrhythmXMUrl } from "../../common/urls";
import locators from "../../common/locators";
import {
  fillWatchDemoForm,
  watchDemoFormData,
  closeModalPopUp
} from "../../helpers/watchDemo";
import { clickButton } from "../../common/uiControlHelper";

describe("Watch Demo Test", () => {
  beforeEach(() => {
    cy.visit(logrhythmXMUrl);
  });

  it("should be able to fill Watch Demo form", () => {
    //Click Watch Demo button
    clickButton(locators.btnWatchDemo, constants.watchDemoButton);
    //Taking screenshot before filling the form
    cy.screenshot("EmptyForm");
    //Fetching the IFrame and filling up the form
    cy.get(locators.watchDemoForm.watchDemoIFrame).then($watchDemoIFrame => {
      const $body = $watchDemoIFrame.contents().find("body");
      cy.wrap($body)
        .find(locators.watchDemoForm.contactFormIFrame)
        .then($contactFormIFrame => {
          fillWatchDemoForm($contactFormIFrame, watchDemoFormData);
        });
    });
    //taking the screenshot after filling the form
    cy.screenshot("FilledForm");
    //Closing the form
    closeModalPopUp();
  });
});
