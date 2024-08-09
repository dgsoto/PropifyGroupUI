import { RegisterPageElements } from "./register-page.elements";

export class RegisterPageHelper {
    static inputName(name) {
        RegisterPageElements.elements.inputName.type(name);
    }

    static inputLastName(lastname) {
        RegisterPageElements.elements.inputLastName.type(lastname);
    }

    static inputCodeCountry(code) {
        RegisterPageElements.elements.inputCodeCountry.type(code);
    }

    static inputTelephone(number) {
        RegisterPageElements.elements.inputTelephone.type(number);
    }

    static inputEmail(email) {
        RegisterPageElements.elements.inputEmail.type(email);
    }

    static inputPassword(password) {
        RegisterPageElements.elements.inputPassword.type(password);
    }

    static clickOnTermCheckbox() {
        RegisterPageElements.elements.checkboxTerm.click();
    }

    static clickOnRegisterButton() {
        RegisterPageElements.elements.buttonRegister.click();
    }

    static registerUser(user) {
        this.inputName(user.name);
        this.inputLastName(user.lastName);
        this.inputCodeCountry(user.codeCountry);
        this.inputTelephone(user.telephone);
        this.inputEmail(user.email);
        this.inputPassword(user.password);
        this.clickOnTermCheckbox();
        this.clickOnRegisterButton();
    }
}