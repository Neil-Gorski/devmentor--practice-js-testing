export default class User {
  constructor(obj) {
    this.email = this._isValidEmail(obj.email);
    this.password = obj.password;
  }
  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
  _isValidEmail(email) {
    if (email.split("@").length === 1) {
      throw new Error(`Email: ${email} is invalid`);
    }
    return email;
  }
}
