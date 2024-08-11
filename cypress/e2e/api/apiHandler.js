
export class APIHandler {

    static request(method, url, body = null) {
        const options = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        };

        if (body) {
            options.body = body;
        }

        return cy.request(options);
    }

    static post(url, body) {
        return this.request('POST', url, body);
    }

    static put(url, body) {
        return cy.request('PUT', url, body);
    }

    static delete(url) {
        return cy.request('DELETE', url);
    }

    static get(url) {
        return cy.request('GET', url);
    }
}
