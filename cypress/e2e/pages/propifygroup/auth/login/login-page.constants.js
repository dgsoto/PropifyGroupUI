export class LoginPageConstants {
    static get messages() {
        return {
            username_error_message: "Correo electrónico es obligatorio",
            password_error_message: "Contraseña es obligatoria",
        }
    }

    static get data() {
        return {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
        }
    }
}