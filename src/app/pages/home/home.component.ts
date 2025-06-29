import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-home',
    imports: [MatButtonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    sunRises(): void {
        document.body.classList.toggle('darkMode', true);
    }

    sunSets(): void {
        document.body.classList.toggle('darkMode', false);
    }
}
