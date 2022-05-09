class Task {
    static count = 0;
    _id;
    _task;
    _completed;
    constructor(task = " ", completed = false) {
        this._id = Task.count++;
        this._task = task;
        this.completed = completed;
    }
    get id() {
        return this._id;
    }
    get task() {
        return this._task;
    }
    get completed() {
        return this._completed;
    }
    set completed(completed){
        this._completed = completed;
    }
}

export default Task;