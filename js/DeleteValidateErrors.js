class DeleteValidateErrors {
    constructor(form){
      this.form = form;
    }
    deleteErrors(){
      this.form.elements.submit.disabled = false;
      this.form.elements.submit.classList.add('popup__button_active');
      let elementss = Array.from(this.form.elements);
        let elements = elementss.filter(function(elem){
          return !(elem.id === 'submit');
        });
        elements.forEach(elem => {
            let errors = elem.nextElementSibling;
            errors.textContent = '';
        });
    }
  }