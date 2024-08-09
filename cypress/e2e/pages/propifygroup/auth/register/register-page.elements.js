export class RegisterPageElements {
    static get elements() {
        return {
            get inputName() {
                return cy.get('input[name="firstname"]');
            },
            get inputLastName() {
                return cy.get('input[name="lastname"]');
            },
            get inputCodeCountry() {
                return cy.get('input[name="code"]');
            },
            get inputTelephone() {
                return cy.get('input[name="phone"]');
            },
            get inputEmail() {
                return cy.get('input[name="email"]');
            },
            get inputPassword() {
                return cy.get('input[name="password"]');
            },
            get checkboxTerm() {
                return cy.get('input[type="checkbox"]');
            },
            get buttonRegister() {
                return cy.contains('button', 'Registrarse');
            },
        }
    }
}