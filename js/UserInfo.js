class UserInfo {
    constructor(form) {
      this.form = form;
    }
    setUserInfo() {
      this.name = this.form.elements.name;
      this.info = this.form.elements.info;
    }
    updateUserInfo(userInfoName, userInfoJob) {
      userInfoName.textContent = this.form.elements.name.value;
      userInfoJob.textContent = this.form.elements.info.value;
    }
  }
