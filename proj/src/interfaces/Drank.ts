export abstract class Drank {
    abstract get ingredients() : Array<string>;
    abstract get name() : string;

    ingredientString() : string {
        return Array.prototype.join.call(this.ingredients, ', ');
    } 
}