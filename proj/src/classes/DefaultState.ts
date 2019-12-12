import { Drank } from '../interfaces/Drank';

export class DefaultState {
    constructor(currentDrank: Drank) {
        this.currentDrank = currentDrank;
    }
    currentDrank: Drank;
}