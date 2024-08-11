import { LoginPageConstants } from "../../pages/propifygroup/auth/login/login-page.constants";
import { LoginPageHelper } from "../../pages/propifygroup/auth/login/login-page.helper";
import { LoginPageValidation } from "../../pages/propifygroup/auth/login/login-page.validation";
import { CommonPageHelper } from "../../pages/propifygroup/common/common-page.helper";
import { CommonPageValidation } from "../../pages/propifygroup/common/common-page.validation";

describe("Login Suite Tests", () => {

    let username;
    let password;

    before(() => {
        username = LoginPageConstants.data.username;
        password = LoginPageConstants.data.password;
    })

    beforeEach(() => {
        CommonPageHelper.navigateToApplication();
        CommonPageHelper.clickOnLoginOption();
        CommonPageValidation.validateMessage("Iniciar sesión");
    });

    it("Verify that it is possible to login with valid username and password.", () => {
        LoginPageHelper.login(username, password);
    });

    it("Verify that it is not possible to login with empty username and password.", () => {  
        LoginPageHelper.clickOnLoginButton();
        LoginPageValidation.validateLoginErrorMessages();
    });

});