import MenuBuilder from "../menubuilder";

const DebugMenu = MenuBuilder.extend({

  initialize: function(data) {
    this.g = data.g;
    return this.el.style.display = "inline-block";
  },

  render: function() {
    this.setName("Debug");

    this.addNode("Get the code", () => {
      return window.open("https://github.com/cmzmasek/msa"); // CZ 2018/09/26
    });

    this.addNode("Toggle mouseover events", () => {
      this.g.config.set("registerMouseHover", !this.g.config.get("registerMouseHover"));
      return this.g.onAll(function() {
        return console.log(arguments);
      });
    });

    this.addNode("Minimized width", () => {
      return this.g.zoomer.set("alignmentWidth", 600);
    });
    this.addNode("Minimized height", () => {
      return this.g.zoomer.set("alignmentHeight", 120);
    });

    this.el.appendChild(this.buildDOM());
    return this;
  }
});
export default DebugMenu;
