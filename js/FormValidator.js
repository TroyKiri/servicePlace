class FormValidator {
    constructor(form ) {
      this.form = form;
    }
    
    checkInputValidity(input, error) {
      let isInputValid = true;
      const validErrors = {
        emptyField: 'Обязательное поле',
        wrongValue: 'Должно быть от 2 до 30 символов',
        linkContent: 'Здесь должна быть ссылка'
      };
      if (input.validity.valueMissing) {
        error.textContent = validErrors.emptyField;
        error.classList.add('popup__error-message_invalid-input');
        error.classList.remove('popup__error-message_valid-input');
        input.classList.add('popup__input_invalid');
        input.classList.remove('popup__input_valid');
        isInputValid = false;
      } else if (input.validity.typeMismatch) {
        error.textContent = validErrors.linkContent;
        error.classList.add('popup__error-message_invalid-input');
        error.classList.remove('popup__error-message_valid-input');
        input.classList.add('popup__input_invalid');
        input.classList.remove('popup__input_valid');
        isInputValid = false;
      } else if (input.validity.tooLong || input.validity.tooShort) {
        error.textContent = validErrors.wrongValue;
        error.classList.add('popup__error-message_invalid-input');
        error.classList.remove('popup__error-message_valid-input');
        input.classList.add('popup__input_invalid');
        input.classList.remove('popup__input_valid');
        isInputValid = false;
      } else {
        error.classList.remove('popup__error-message_invalid-input');
        error.classList.add('popup__error-message_valid-input');
        input.classList.add('popup__input_valid');
        input.classList.remove('popup__input_invalid');
      }
      return isInputValid;
    }
    setSubmitButtonState(button, status) {
      if (status) {  
        button.classList.add('popup__button_active');
        button.disabled = false;
      } else {
        button.classList.remove('popup__button_active');
        button.disabled = true;
      }
    }
    setEventListeners() {
      this.form.addEventListener('input', () => {
        let isFormValid = true;
        let elementss = Array.from(this.form.elements);
        let elements = elementss.filter(function(elem){
          return !(elem.id === 'submit');
        });
        elements.forEach(elem => {
            let errors = elem.nextElementSibling;
            const isValidInput = this.checkInputValidity(elem, errors);
            if (!isValidInput) {
              isFormValid = false;
            }
            const button = this.form.querySelector('.button');
            this.setSubmitButtonState(button, isFormValid);
          });
      });
    }
  }