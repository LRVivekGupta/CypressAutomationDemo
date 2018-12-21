import * as h from "../../support/constants";
import locators from "../../support/pageElemet";
import {
  validateHeaderText,
  clickButton,
  fillWatchDemoForm,
  watchDemoFormData
} from "../../support/helper";

describe("Internal Coding Test", () => {
  beforeEach(() => {
    cy.visit(h.baseUrl);
  });
  it("Verify LogRhythm-XM page loaded successfully", () => {
    validateHeaderText(locators.h1, h.logrhythmXM);
  });

  it("Validate Watch a Demo pop up window", () => {
    //Click Watch Demo button
    clickButton(locators.btn_WatchDemo, h.watchDemoButton);
    //Taking screenshot before filling the form
    cy.screenshot("EmptyForm");
    //Fetching the IFrame and filling up the form
    cy.get(locators.iframeElem).then($iframe => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find(locators.innerIframeElem)
        .then(function($frame) {
          fillWatchDemoForm($frame, watchDemoFormData);
        });
    });
    //taking the screenshot after filling the form
    cy.screenshot("FilledForm");
    //Closing the form
    cy.get(locators.btn_Close).click();
  });

  it("Verify LogRhythm XM Header headers Text", () => {
    validateHeaderText(locators.h1, h.logrhythmXM);
  });
  it("Verify Solve your Security Needs today-Scale for Tomorrow header text", () => {
    validateHeaderText(locators.h2, h.solveYourSecurityNeedsToday);
  });
  it("Verify See LogRhythm in Action header text", () => {
    validateHeaderText(locators.h2, h.seeLogRhythmInAction);
  });
  it("Validate Page Misspelled Header Text", () => {
    //Test will fail as the header text that needs to be validated is incorrect
    validateHeaderText(locators.h2, h.incorrectHeaderText);
  });
});
