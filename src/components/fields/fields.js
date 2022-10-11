import { field } from "./fields.tmpl";
import Handlebars from "handlebars";
class Field {
  constructor(label, type, name) {
    this.label = label;
    this.type = type;
    this.name = name;
    this.render();
  }
  render() {
    // const template = Handlebars.compile(button);
    // template({
    //     wrapperClass: `btn ${this.classes}`,
    //     text: this.text,
    //   })
    Handlebars.registerPartial("myField", field);
    return;
  }
}
const newField = new Field();
export default newField;
