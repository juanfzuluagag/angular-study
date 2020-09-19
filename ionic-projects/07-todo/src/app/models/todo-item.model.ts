export class TodoItem {
    description : string;
    complete : boolean;
    
    constructor( description : string){
        this.description = description;
        this.complete = false;
    }
}