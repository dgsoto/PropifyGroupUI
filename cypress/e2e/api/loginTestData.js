
export class LoginTestData {
    
    static getErrorMessages() {
        return {
            'MSG_USER_NOT_REGISTERED': 'User with this email was not registered',
            'MSG_USERNAME_INVALID': 'Incorrect Username',
            'MSG_PASSWORD_INVALID': 'Incorrect Password'
        };
    }
    
    static getInvalidUserData() {
        const errorMessages = this.getErrorMessages();

        return [
            { username: '', password: '', expectedError: errorMessages["MSG_USER_NOT_REGISTERED"] },
            { username: 'Invalid-Username', password: 'InvalidP@ssword', expectedError: errorMessages["MSG_USER_NOT_REGISTERED"] },
            { username: '', password: 'InvalidP@ssword', expectedError: errorMessages["MSG_USER_NOT_REGISTERED"] },
            { username: 'Invalid-Username', password: '', expectedError: errorMessages["MSG_USER_NOT_REGISTERED"] },
            { username: 'test@test.com', password: '55sds', expectedError: errorMessages["MSG_PASSWORD_INVALID"] },
            { username: 'x@.', password: 'test12345', expectedError: errorMessages["MSG_USERNAME_INVALID"] }
        ];
    }
    
}
