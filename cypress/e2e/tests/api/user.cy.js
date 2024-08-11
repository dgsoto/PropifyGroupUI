import { User } from "../../api/user";
import { RegisterPageConstants } from "../../pages/propifygroup/auth/register/register-page.constants";

describe('User API Tests', () => {

    let name;
    let lastname;
    let email;
    let password;
    let telephone;

    beforeEach(() => {
        name = RegisterPageConstants.data.name;
        lastname = RegisterPageConstants.data.lastname;
        email = RegisterPageConstants.data.email;
        password = RegisterPageConstants.data.password;
        telephone = RegisterPageConstants.data.telephone;
    });

    it('Verify that a new user can be created via POST API and returns a 201 status code.', () => {
        const user = new User(name, lastname, email, password, telephone);
        user.create().then(response => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
        });
    });

    it('Verify that an existing user can be updated via PUT API.', () => {
        const user = new User('Diego', 'Gonzales', 'diego.updated@example.com', 'SecurePass1!', '+549123456789');
        user.update(1).then(response => {
            expect(response.status).to.eq(200);
        });
    });

    it('Verify that a user can be deleted by valid ID via DELETE API.', () => {
        User.delete(1).then(response => {
            expect(response.status).to.eq(204);
        });
    });

    it('Verify that a user can be retrieved by ID via GET API.', () => {
        User.get(1).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('email', 'diego@example.com');
        });
    });
});
