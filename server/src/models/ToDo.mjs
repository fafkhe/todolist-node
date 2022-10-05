import UID from "../UID.mjs";

class ToDo {
  constructor(text) {
    this._id = UID();
    this.text = text;
    this.isDone = false;
  }

  switchDone() {
    this.isDone = !this.isDone;
  }
}

export default ToDo;
