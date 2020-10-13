class BackgroundSetter {
    constructor(background) {
      this.background = background
    }
    
    async element(element) {
      var insertString = '\n\t<div style=' + '"background-image: url(' + "'" + this.background
      + "');" + '"' + ">"
      element.prepend(insertString, {html: true})
    }
  }
  
  module.exports = BackgroundSetter