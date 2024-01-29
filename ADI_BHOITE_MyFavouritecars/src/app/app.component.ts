import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentCardComponent } from "./content-card/content-card.component"
import { CommonModule } from '@angular/common';
import { ContentListComponent }  from './content-list/content-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentCardComponent,CommonModule, ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ADI_BHOITE_MyFavouritecars';
}
