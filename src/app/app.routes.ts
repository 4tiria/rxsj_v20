import { Routes } from "@angular/router";
import { GradientComponent } from "./pages/gradient/gradient.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  { component: HomeComponent, path: "" },
  { component: GradientComponent, path: "gradient" },
];
