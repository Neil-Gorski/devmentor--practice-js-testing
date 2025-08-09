export default class User {
  constructor(obj) {
    this.email = this._isValidEmail(obj.email);
    this.password = this._isValidPassword(obj.password);
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
  _isValidPassword(password) {
    const passwordLengh = password.length;
    if (passwordLengh < 8) {
      throw new Error(
        `This password has only ${passwordLengh} character. Min 8 requierd!`
      );
    }
    return password;
  }
}
