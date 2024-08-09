import { LoginPageElements } from "./login-page.elements";

export class LoginPageHelper {
    static inputUsername(username) {
        LoginPageElements.elements.inputUsername.type(username);
    }

    static inputPassword(password) {
        LoginPageElements.elements.inputPassword.type(password);
    }

    static clickOnLoginButton() {
        LoginPageElements.elements.loginButton.click();
    }

    static login(username, password) {
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickOnLoginButton();
    }
}