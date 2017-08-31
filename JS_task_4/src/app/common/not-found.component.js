import {WFMComponent} from "../../framework/index";

class NotFound extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const notFound = new NotFound({
    selector: 'app-not-header',
    template: `
        <img src="../../dist/404_page_cover.jpg" style="width: 100%"/>
        
  
        
  `
})