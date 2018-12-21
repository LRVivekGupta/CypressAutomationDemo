import * as constants from "../../common/constants";
import { logrhythmXMUrl } from "../../common/urls";
import locators from "../../common/locators";
import { validateText } from "../../common/uiControlHelper";

describe("Verify headers on LogRhythm XM Page ", () => {
  beforeEach(() => {
    cy.visit(logrhythmXMUrl);
  });

  it("Verify LogRhythm XM page has 'LogRhythm XM' Header", () => {
    validateText(locators.h1, constants.logrhythmXM);
  });

  it("Verify LogRhythm XM page has 'Solve Your Security Needs Today—Scale for Tomorrow' Header", () => {
    validateText(locators.h2, constants.solveYourSecurityNeedsToday);
  });

  it("Verify LogRhythm XM page has 'See LogRhythm in Action' Header", () => {
    validateText(locators.h2, constants.seeLogRhythmInAction);
  });

  it("Verify LogRhythm XM page doesn't have Misspelled Header", () => {
    //Incorrect Text: Solve Your Securitty Needs Today—Scale for Tomorrow
    //Test will fail as the header text that needs to be validated is incorrect
    validateText(locators.h2, constants.incorrectHeaderText);
  });
});
