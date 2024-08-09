import { LoginPageConstants } from "./login-page.constants";
import { LoginPageElements } from "./login-page.elements";

export class LoginPageValidation {
    static validateErrorUsernameMessage() {
        let username_msg = LoginPageConstants.messages.username_error_message;
        LoginPageElements.messages.errorUsername.should('have.text', username_msg);
    }

    static validateErrorPasswordMessage() {
        let password_msg = LoginPageConstants.messages.password_error_message;
        LoginPageElements.messages.errorPassword.should('have.text', password_msg);
    }

    static validateLoginErrorMessages() {
        this.validateErrorUsernameMessage();
        this.validateErrorPasswordMessage();
    }
}