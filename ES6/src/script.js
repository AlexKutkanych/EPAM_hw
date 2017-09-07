
class Task {
    constructor(title = 'st title'){
        this.title = title;
        this.done = false;
    }

    complete(){
        this.done = true;
        console.log(`task"${this.title}"done`);
    }
}

let task = new Task();

console.log(task);

task.complete();
