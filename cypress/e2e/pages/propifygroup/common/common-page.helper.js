import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {
    static navigateToApplication() {
        cy.visit(CommonPageConstants.applicationURL);
    }

    static clickOnHomeOption() {
        CommonPageElements.topMenu.home.click();
    }

    static clickOnAboutOption() {
        CommonPageElements.topMenu.about.click();
    }

    static clickOnContactOption() {
        CommonPageElements.topMenu.contact.click();
    }

    static clickOnProfileOption() {
        CommonPageElements.topMenu.profile.click();
    }

    static clickOnPostOption() {
        CommonPageElements.topMenu.post.click();
    }

    static clickOnLoginOption() {
        CommonPageElements.topMenu.login.click();
    }

    static clickOnRegisterOption() {
        CommonPageElements.topMenu.register.click();
    }
}