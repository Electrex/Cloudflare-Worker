class NameTransformer {
  constructor(name) {
    this.name = name
  }
  
  async element(element) {
    element.setAttribute("src", this.name)
  }
}

module.exports = NameTransformer