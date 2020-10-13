class TitleSetter {
    constructor(name) {
      this.name = name
    }
    
    async element(element) {
      element.setInnerContent(this.name)
    }
  }
  
  module.exports = TitleSetter