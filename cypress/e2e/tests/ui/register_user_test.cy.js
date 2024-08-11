import { RegisterPageConstants } from "../../pages/propifygroup/auth/register/register-page.constants";
import { RegisterPageHelper } from "../../pages/propifygroup/auth/register/register-page.helper";
import { CommonPageHelper } from "../../pages/propifygroup/common/common-page.helper";

describe("Suite Register User Tests", () => {

    let user;

    before(() => {
        user = {
            name: RegisterPageConstants.data.name,
            lastName: RegisterPageConstants.data.lastname,
            codeCountry: RegisterPageConstants.data.codecountry,
            telephone: RegisterPageConstants.data.telephone,
            email: RegisterPageConstants.data.email,
            password: RegisterPageConstants.data.password
        }
    });

    beforeEach(() => {
        CommonPageHelper.navigateToApplication();
        CommonPageHelper.clickOnLoginOption();
        CommonPageHelper.clickOnRegisterOption();
    });

    it("Verify that it is possible to create a new user.", () => {
        RegisterPageHelper.registerUser(user);
        cy.wait(1000);
    });

});