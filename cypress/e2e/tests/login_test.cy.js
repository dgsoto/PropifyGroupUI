import { LoginPageHelper } from "../pages/propifygroup/auth/login/login-page.helper";
import { LoginPageValidation } from "../pages/propifygroup/auth/login/login-page.validation";
import { CommonPageHelper } from "../pages/propifygroup/common/common-page.helper";
import { CommonPageValidation } from "../pages/propifygroup/common/common-page.validation";

describe("Login Suite Tests", () => {

    it("Click in login option", () => {
        CommonPageHelper.navigateToApplication();
        CommonPageHelper.clickOnLoginOption();
        CommonPageValidation.validateMessage("Iniciar sesión");

        LoginPageHelper.clickOnLoginButton();
        LoginPageValidation.validateLoginErrorMessages();
    });

});