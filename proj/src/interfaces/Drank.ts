export abstract class Drank {
    abstract ingredients() : Array<string>;
    abstract name() : string;

    ingredientString() : string {
        return Array.prototype.join.call(this.ingredients(), ', ');
    } 
}