import {WFMComponent} from "../../framework/index";

class NotFound extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const notFound = new NotFound({
    selector: 'app-not-header',
    template: `
    <div style="width: 100%; height: 100%; background-color: #C6EAE8">
        <img src="../../dist/404_page_cover.jpg" style="display: block; margin: 0 auto"/>
     </div>   
  
        
  `
})