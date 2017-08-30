import {router} from '../tools/router';

export class Module {
    constructor(config){
        this.components = config.components
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
    }

    start(){
        this.initComponents()
        if(this.routes) this.initRoutes()
    }

    initComponents(){
        this.bootstrapComponent.render()
        this.components.forEach(c => c.render())
    }

    initRoutes(){
        window.addEventListener("hashchange", this.renderRoute)
    }

    renderRoute(){
        let url = route.getUrl()
        let route = this.route.find(r => r.path === url)
    }

}