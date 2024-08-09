import { Utils } from "../../../../../support/utils";

export class RegisterPageConstants {
    static get data() {
        return {
            name: `Pepito${Utils.generateRandomString()}`,
            lastname: `Mamani${Utils.generateRandomString()}`,
            codecountry: `0000`,
            telephone: Utils.generateRandomArgentinePhoneNumber(),
            email: Utils.generateRandomEmail(),
            password: Utils.generateRandomPassword(),
        }
    }
}