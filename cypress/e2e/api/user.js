import { APIHandler } from './apiHandler';

export class User {
    constructor(name, lastname, email, password, phone) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phone = phone;

        this.baseURL = Cypress.env('apiBaseUrl');
        this.user_endpoint = this.baseURL + Cypress.env('userEndpoint');
    }

    toJson() {
        return {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            phone: this.phone
        };
    }

    create() {
        return APIHandler.post(this.user_endpoint, this.toJson());
    }

    update(userId) {
        return APIHandler.put(`${this.user_endpoint}/${userId}`, this.toJson());
    }

    delete(userId) {
        return APIHandler.delete(`${this.user_endpoint}/${userId}`);
    }

    get(userId) {
        return APIHandler.get(`${this.user_endpoint}/${userId}`);
    }
}
