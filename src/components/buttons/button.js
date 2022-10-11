import Handlebars from "handlebars";
import { button } from "./button.tmpl";
class Button {
  constructor(text, classes) {
    this.text = text;
    this.classes = classes;
    this.render();
  }
  render() {
    // const template = Handlebars.compile(button);
    // template({
    //     wrapperClass: `btn ${this.classes}`,
    //     text: this.text,
    //   })
    Handlebars.registerPartial("myBtn", button);
    return;
  }
}
const newBtn = new Button("Войти", "btn btn-primary");
export default newBtn;
