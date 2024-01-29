import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 0,
        title: 'Ferrari',
        description: 'Italian sports car',
        creator: 'Enzo Ferrari',
        imgURL: 'assets/images/Img_1.jpg',
        type: 'Sports Car',
        tags: ['luxury', 'speed', 'performance'],
      },
      {
        id: 1,
        title: 'Porsche',
        description: 'German sports car',
        creator: 'Ferdinand Porsche',
        imgURL: 'assets/images/Img_2.jpg',
        type: 'Sports Car',
        tags: ['precision', 'engineering', 'style'],
      },
      {
        id: 2,
        title: 'Lamborghini',
        description: 'Italian sports car',
        creator: 'Ferruccio Lamborghini',
        imgURL: 'assets/images/Img_3.jpg',
        type: 'Sports Car',
        tags: ['power', 'aggression', 'style'],
      },
      {
        id: 3,
        title: 'McLaren',
        description: 'British sports car',
        creator: 'Bruce McLaren',
        imgURL: 'assets/images/Img_4.jpg',
        type: 'Sports Car',
        tags: ['innovation', 'performance', 'speed'],
      },
      {
        id: 4,
        title: 'Bugatti',
        description: 'French sports car',
        creator: 'Ettore Bugatti',
        imgURL: 'assets/images/Img_5.jpg',
        type: 'Sports Car',
        tags: ['luxury', 'speed', 'precision'],
      },
      {
        id: 5,
        title: 'Aston Martin',
        description: 'British sports car',
        creator: 'Lionel Martin',
        imgURL: 'assets/images/Img_6.jpg',
        type: 'Sports Car',
        tags: ['elegance', 'power', 'performance'],
      },
     
    ];
  }
}