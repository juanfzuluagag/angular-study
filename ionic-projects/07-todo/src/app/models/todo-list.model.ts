import { TodoItem } from './todo-item.model';

export class TodoList {

    id : number;
    title : string;
    dateCreated : Date;
    dateFinished : Date;
    finished : boolean;
    items : TodoItem[];

    constructor(title : string) {
        this.title = title;

        this.dateCreated = new Date();
        this.finished = false;
        this.items = [];

        this.id = new Date().getTime();
    }
}