export class LoginPageElements {
    static get elements() {
        return {
            get inputUsername() {
                return cy.get('input[name="email"]');
            },
            get inputPassword() {
                return cy.get('input[name="password"]');
            },
            get loginButton() {
                return cy.get('button.button-primary');
            },
        }
    }

    static get messages() {
        return {
            get errorUsername() {
                return cy.contains('span', 'Correo electrónico es obligatorio');
            },
            get errorPassword() {
                return cy.contains('span', 'Contraseña es obligatoria');
            }
        }
    }
}