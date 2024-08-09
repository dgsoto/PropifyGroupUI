import { CommonPageElements } from "./common-page.elements";

export class CommonPageValidation {
    static validateMessage(message) {
        CommonPageElements.validate.sessionMessage.should('have.text', message);
    }
}