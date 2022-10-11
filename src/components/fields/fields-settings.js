import { fieldSettings } from "./fields-settings.tmpl";
import Handlebars from "handlebars";
class FieldSettings {
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
    Handlebars.registerPartial("myFieldSettings", fieldSettings);
    return;
  }
}
const newFieldSettings = new FieldSettings();
export default newFieldSettings;
