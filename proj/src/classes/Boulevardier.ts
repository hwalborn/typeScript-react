import { Drank } from '../interfaces/Drank';

export class Boulevardier extends Drank {
    name(): string {
        return "Boulevardier";
    }
    ingredients(): string[] {
        return new Array("bourbon", "campari");
    }
}