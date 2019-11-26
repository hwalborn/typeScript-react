import { Person } from '../interfaces/Person';

export class Programmer implements Person {
    firstName: string;    
    lastName: string;
    middleInitial: string;

    get fullName(): string {
        return `${this.firstName} ${this.middleInitial} ${this.lastName}`;
    }

    constructor(firstName: string, middleInitial: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
    }
}