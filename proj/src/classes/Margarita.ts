import { Drank } from "../interfaces/Drank";

export class Margarita extends Drank {
    get ingredients(): string[] {
        return new Array<string>('tequila', 'triple sec', 'lime', 'salt',);
    }    
    
    get name(): string {
        return 'Margarita';
    }
}