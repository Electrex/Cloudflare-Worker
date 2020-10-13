import Router from './router'
import LinksTransformer from './LinksTransformer'
import AvatarTransformer from './AvatarTransformer'
import NameTransformer from './NameTransformer'
import ProfileShower from './ProfileShower'
import TitleSetter from './TitleSetter'
import BackgroundSetter from './BackgroundSetter'
import SocialTransformer from './SocialTransformer'

var links = [{ "name": "LinkedIn", "url": "https://www.linkedin.com/in/yusuf-mostafa-293b83148/" }, 
    { "name": "Github", "url": "https://github.com/Electrex/" },
    { "name": "YouTube", "url": "https://www.youtube.com/channel/UCVCGOmEfk8gpyZfniHDtmCg" }]

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handler(request) {
    const init = {
        headers: { "content-type": "application/json;charset=UTF-8" },
    }
    const body = JSON.stringify(links)
    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()
    var url = new URL(request.url)
    if (url.pathname == "/links") {
        r.get('/links', request => handler(request)) // return json response of link objects
        const resp = await r.route(request)
        return resp
    } else {
        var avatar = "https://avatars1.githubusercontent.com/u/11496110?s=460&u=e8ca84c6cb7f02fe72b3761d9b1b65d8258b0e18&v=4"
        var background = "https://cdnb.artstation.com/p/assets/images/images/001/636/155/large/yakovlev-art-pylot-fanart.jpg?1449881887"
        var name = "Yusuf Mostafa"
        const writer = new HTMLRewriter()
            .on("div#links", new LinksTransformer(links))
            .on("img#avatar", new AvatarTransformer(avatar))
            .on("div#profile", new ProfileShower())
            .on("title", new TitleSetter(name))
            .on("body", new BackgroundSetter(background))
            .on("div#social", new SocialTransformer(links))
            .on("h1#name", new NameTransformer(name))
            // .on("img#avatar", {element: (element) => {
            //     element.setAttribute("src", avatar)}})
            // .on("div#profile", {element: (element) => {
            //     element.setAttribute("style", "")}})
            // .on("title", {element: (element) => {
            //     element.setInnerContent(name)}})
            // .on("h1#name", {element: (element) => {
            //     element.setInnerContent("Yusuf Mostafa")}})
        var oldres = await fetch("https://static-links-page.signalnerve.workers.dev") // return a static web page
        // const init = {
        //     headers: {
        //         "content-type": "text/html;charset=UTF-8",
        //     }
        // }
        return writer.transform(oldres)
    }
        
}