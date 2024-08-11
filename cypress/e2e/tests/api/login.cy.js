import { Login } from "../../api/login";
import { LoginTestData } from "../../api/loginTestData";
import { LoginPageConstants } from "../../pages/propifygroup/auth/login/login-page.constants"

describe("Login API Tests", () => {

    let username;
    let password;
    let test_with_invalid_login_data = LoginTestData.getInvalidUserData();

    beforeEach(() => {
        username = LoginPageConstants.data.username;
        password = LoginPageConstants.data.password;
    });

    it("Verify that it is possible to login with valid username, password via POST API.", () => {
        const login = new Login(username, password);
        login.login().then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('token');
            expect(response.body.data.token).to.match(/^[A-Za-z0-9\-_\.]+$/);
        });
    });

    test_with_invalid_login_data.forEach(({ username, password, expectedError }) => {
        it(`Verify that error message is displayed when attempt to login with invalid username: "${username}", password: "${password}".`, () => {
            const invalidLogin = new Login(username, password);
            invalidLogin.login().then(response => {
                expect(response.status).to.eq(400);
                expect(response.body).to.have.property('message');
                expect(response.body.message).to.eq('Error logging User');
                expect(response.body.errors[0]).to.include(expectedError);
            });
        });
    });

    it("Verify that limit time is less than 900ms when login with valid username, password via POST API.", () => {
        const login = new Login(username, password);
        login.login().then(response => {
            expect(response.duration).to.be.lessThan(900);
        });
    });

});