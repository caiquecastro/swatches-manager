class SwatchForm {
  constructor() {
    this.reset();
  }

  load(attributes) {
    for (const field in attributes) {
      this[field] = attributes[field];
    }
  }

  reset() {
    this.name = "";
    this.price = "";
    this.image = "";
    this.color = "";
  }
}

export default SwatchForm;
