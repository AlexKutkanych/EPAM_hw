import {WFMComponent} from "../../framework/index";

class AppHeader extends WFMComponent {
    constructor(config) {
       super(config)
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `    <nav>
    <div class="nav-wrapper">
      <a href="#" class="left brand-logo">Logo</a>
      <a href="#" class="right" style="margin-right: 20px">Tabs</a>
      <a href="#" class="right" style="margin-right: 20px">FAQ</a>
    </div>
  </nav>
  
        
  `
})