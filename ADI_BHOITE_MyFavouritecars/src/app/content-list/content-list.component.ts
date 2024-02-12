import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent {
  searchTitle: string = '';
  searchMsg: string = '';
  isTitleFound: boolean = false;
  contents: Content[];

  constructor() {
    this.contents = [
      {
    id: 0,
    title: 'Mercedes-Benz S-Class',
    description: 'Luxury Redefined',
    creator: 'Mercedes-Benz',
    imgURL: 'assets/Images/Mercedes.jpeg',

    type: 'Luxury',
    tags: ['elegance', 'performance', 'comfort'],
  },
  {
    id: 1,
    title: 'Porsche 911',
    description: 'Iconic Sports Car',
    creator: 'Porsche',
    imgURL: 'assets/Images/Porsche.jpeg',
    type: 'Sports',
    tags: ['speed', 'precision', 'thrill'],
  },
  {
    id: 2,
    title: 'Rolls-Royce Phantom',
    description: 'The Epitome of Luxury',
    creator: 'Rolls-Royce',
    imgURL: 'assets/Images/Rolls.jpeg',
    //imgURL:'',
    type: 'Luxury',
    tags: ['opulence', 'craftsmanship', 'prestige'],
  },
  {
    id: 3,
    title: 'Ferrari 488 GTB',
    description: 'Exhilarating Performance',
    creator: 'Ferrari',
    imgURL: 'assets/Images/Ferrari.jpeg',
    //imgURL:'',
    type: 'Sports',
    tags: ['power', 'agility', 'exclusivity'],
  },
  {
    id: 4,
    title: 'BMW 7 Series',
    description: 'Combining Luxury and Performance',
    creator: 'BMW',
    imgURL: 'assets/Images/BMW.jpeg',
    type: 'Luxury',
    tags: ['style', 'technology', 'driving pleasure'],
  },
  {
    id: 5,
    title: 'Lamborghini Huracán',
    description: 'Supercar Sensation',
    creator: 'Lamborghini',
    imgURL: 'assets/Images/lambo.jpeg',
    type: 'Sports',
    tags: ['speed', 'bold design', 'adrenaline'],
  },
  {
    id: 6,
    title: 'Audi R8',
    description: 'Performance with Elegance',
    creator: 'Audi',
    imgURL: 'assets/Images/Audi.jpeg',
    type: '',
    tags: ['quattro', 'precision engineering', 'luxurious sportiness'],
  }
    ];
  }

  searchContentByTitle() {
    const doesTitleMatch = this.contents.some(
      (content) =>
        content.title.toLowerCase() === this.searchTitle.toLowerCase()
    );

    this.isTitleFound = doesTitleMatch;
    this.searchMsg = doesTitleMatch
      ? `Content with title '${this.searchTitle}' exists.`
      : `Content with title '${this.searchTitle}' does not exist.`;
  }
}
