class AvatarTransformer {
  constructor(avatar) {
    this.avatar = avatar
  }
  
  async element(element) {
    element.setAttribute("src", this.avatar)
  }
}

module.exports = AvatarTransformer