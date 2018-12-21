export type UIControlTypeT = "TextBox" | "Dropdown";

export interface FormDataT {
  element: string;
  value: string;
  type: UIControlTypeT;
}
