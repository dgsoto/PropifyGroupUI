import { CommonPageHelper } from "../pages/propifygroup/common/common-page.helper";
import { CommonPageValidation } from "../pages/propifygroup/common/common-page.validation";

describe("Login Suite Tests", () => {

    it("Click in login option", () => {
        CommonPageHelper.navigateToApplication();
        CommonPageHelper.clickOnLoginOption();
        CommonPageValidation.validateMessage("Iniciar sesión");
    });

});