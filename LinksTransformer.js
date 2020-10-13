class LinksTransformer {
  constructor(links) {
    this.links = links
  }
  
  async element(element) {
    //console.log(element.tagName)
    //console.log(element.id)
    var insertString = '\n'
    for (var i = 0; i < this.links.length; i++){
      var currString = '\t\t<a href='
      currString += '"' + this.links[i]["url"]
      currString += '">' + this.links[i]["name"]
      currString += '<\/a>'
      insertString += currString
      insertString += "\n"
      //<a href="https://asampleurl.com">A sample URL</a>
      //element.append("href", this.links[i]["url"])
      // var textnode = element.createTextNode(obj["name"]);
      // node.appendChild(textnode);
      // element.appendChild(node);
    }
    element.append(insertString, {html: true})
  }
}

module.exports = LinksTransformer