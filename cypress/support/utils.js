export class Utils {

    static generateRandomString(length = 8) {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    
    static generateRandomEmail(domain = 'example.com') {
        const randomName = this.generateRandomString(10);
        return `${randomName}@${domain}`;
    }
    
    static generateRandomPassword(length = 8) {
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        
        let result = '';
        result += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        result += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        result += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    
        const allCharacters = uppercase + lowercase + numbers + specialCharacters;
        for (let i = result.length; i < length; i++) {
            result += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        }
        
        return result.split('').sort(() => 0.5 - Math.random()).join('');
    }
    
    static generateRandomArgentinePhoneNumber() {
        const areaCodes = ['11', '221', '261', '341', '351', '381', '385', '387'];
        const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
        const firstPart = Math.floor(1000 + Math.random() * 9000).toString();
        //const secondPart = Math.floor(1000 + Math.random() * 9000).toString();
           
        return `054${areaCode}${firstPart}`;
    }

}