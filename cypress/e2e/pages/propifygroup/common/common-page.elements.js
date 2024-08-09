export class CommonPageElements {
    static get topMenu() {
        return {
            get home() {
                return cy.contains('a', 'Home');
            },
            get about() {
                return cy.get('a[href="/about"]');
            },
            get contact() {
                return cy.get('a[href="/contact"]');
            },
            get profile() {
                return cy.get('a[href="/my-self"]');
            },
            get post() {
                return cy.get('a[href="/posts"]');
            },
            get login() {
                return cy.get('a[href="/auth/login"]');
            },
            get register() {
                return cy.get('a[href="/auth/register"]');
            },
        }
    }

    static get validate() {
        return {
            get sessionMessage() {
                return cy.get('h2.text-gray-500');
            }
        }
    }
}