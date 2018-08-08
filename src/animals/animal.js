export class Animal {

  constructor(object = null) {
    if (object == null) {
      this.id = null;
      this.name = '';
    } else {
      this.id = object.id;
      this.name = object.name;
    }
  }
}
