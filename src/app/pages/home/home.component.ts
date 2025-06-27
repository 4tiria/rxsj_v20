import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  sunRises(): void {
    document.body.classList.toggle("darkMode", true);
  }

  sunSets(): void {
    document.body.classList.toggle("darkMode", false);
  }
}
