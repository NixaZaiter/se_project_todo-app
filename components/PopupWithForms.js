import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
  }
  // The PopupWithForm should be a child of Popup, and it should comply with the following requirements:

  // It accepts two arguments: the popup selector and a callback function, which PopupWithForm calls when the form’s submit event fires.
  // It has a private method named _getInputValues(), which collects data from all the input fields and returns it as an object.
  // This data should then be passed to the submission handler as an argument.
  _getInputValues() {}
  // It overrides the setEventListeners() parent method.
  // The setEventListeners() method of the PopupWithForm class should add a submit event listener to the form and call the setEventListeners() method of the parent class.
  setEventListeners() {}
  // In index.js, you’ll need to delete the existing submit and closing listeners for the form (but not the listener that opens the form).
  // Then create an instance of the PopupWithForm class for the new to-do form and call its setEventListeners() method.

  // You’ll need to call this instance’s open() and close() methods wherever needed in index.js.
}

export default PopupWithForm;
