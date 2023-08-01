
var Component = class extends HTMLElement {
  constructor() {
    super();
    this.style.display = "inline-block";
  }
};
var Container = class extends Component {
  constructor() {
    super();
    this.style.display = "inline-flex";
    this.style.gap = "24px";
    this.style.padding = "32px";
  }
};

var ColorBlock = class extends Component {
  constructor() {
    super();
    this.style.width = "200px";
    this.style.height = "200px";
    this.style.background = "var(--background-color-block, black)";
  }
};
customElements.define("color-block", ColorBlock);
var LayoutContainer = class extends Container {
  constructor() {
    super();
    this.style.background = "lightgray";
  }
};
customElements.define("layout-container", LayoutContainer);

// export { ColorBlock, LayoutContainer };
