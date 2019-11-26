import { Boulevardier } from './Boulevardier';

import { Drank } from '../interfaces/Drank';

export class DefaultState {
    constructor(currentDrank: Drank) {
        this.currentDrank = currentDrank;
    }
    currentDrank: Drank;
    get drankOptions() : Array<Drank> {
        return new Array(new Boulevardier());
    };
}