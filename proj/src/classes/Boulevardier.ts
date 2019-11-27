import { Drank } from '../interfaces/Drank';

export class Boulevardier extends Drank {
    get name(): string {
        return "Boulevardier";
    }
    get ingredients(): string[] {
        return new Array("bourbon", "campari", "red vermouth");
    }
}