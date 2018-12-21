import locators from "../common/locators";
import { selectDropdownValue, setText } from "../common/uiControlHelper";
import { FormDataT } from "../common/types";

/**
 * Watch Demo Form Data Type
 */
export const watchDemoFormData: FormDataT[] = [
  {
    element: locators.watchDemoForm.txtFirstname,
    value: "Vivek",
    type: "TextBox"
  },
  {
    element: locators.watchDemoForm.txtLastname,
    value: "Gupta",
    type: "TextBox"
  },
  {
    element: locators.watchDemoForm.txtEmail,
    value: "vivek.gupta6@globallogic.com",
    type: "TextBox"
  },
  {
    element: locators.watchDemoForm.txtJobTitle,
    value: "SDET",
    type: "TextBox"
  },
  {
    element: locators.watchDemoForm.txtCompany,
    value: "GlobalLogic",
    type: "TextBox"
  },
  {
    element: locators.watchDemoForm.txtPhone,
    value: "1234567890",
    type: "TextBox"
  },
  {
    element: locators.watchDemoForm.ddlCountry,
    value: "India",
    type: "Dropdown"
  },
  {
    element: locators.watchDemoForm.txtAreaComments,
    value: "comments",
    type: "TextBox"
  }
];

/**
 * Method to fill Watch Demo form
 * @param $container container of iframe
 * @param formData string array
 */
export const fillWatchDemoForm = (
  $container: JQuery,
  formData: FormDataT[]
) => {
  formData.forEach(data => {
    if (data.type === "Dropdown") {
      selectDropdownValue($container, data.element, data.value);
      return;
    }

    setText($container, data.element, data.value);
  });
};
/*
 *Method to close Watch Demo Form pop up
 */
export const closeModalPopUp = () => {
  cy.get(locators.watchDemoForm.btnClose).click();
};
