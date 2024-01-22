import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentCardComponent } from "./content-card/content-card.component"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentCardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ADI_BHOITE_MyFavouritecars';
}
