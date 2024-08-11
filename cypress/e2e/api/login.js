import { APIHandler } from './apiHandler';

export class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;

        this.baseURL = Cypress.env('apiBaseUrl');
        this.login_endpoint = this.baseURL + Cypress.env('loginEndpoint');
    }

    toJson() {
        return {
            email: this.username,
            password: this.password
        };
    }

    login() {
        return APIHandler.post(this.login_endpoint, this.toJson());
    }

    get() {
        return APIHandler.get(this.login_endpoint);
    }
}
