class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    console.log(this._popupElement);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
  }

  _handleEscapeClose() {
    //close when hitting the escape key
    this._popupElement.addEventListener("keydown", (evt) => {
      if (evt.key !== `Escape`) {
        return;
      } else {
        this.close();
      }
    });
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", () => {
      //close on "close icon" and on clicking shaded area
    });
  }
}

export default Popup;
