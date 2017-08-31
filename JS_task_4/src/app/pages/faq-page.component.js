import {WFMComponent} from '../../framework/index';

class FaqPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }

}

export const faqPageComponent = new  FaqPageComponent({
    selector: 'app-faq-page',
    template: `<h1>FAQ Page</h1>`
})