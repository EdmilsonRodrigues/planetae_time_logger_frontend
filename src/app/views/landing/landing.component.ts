import { Component } from '@angular/core';
import { LandingHeaderComponent } from "./header/header.component";
import { LandingMainComponent } from "./main/main.component";
import { LandingFooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingHeaderComponent, LandingMainComponent, LandingFooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
