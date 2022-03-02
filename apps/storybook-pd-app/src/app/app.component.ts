import { Component } from '@angular/core';
import { ICard } from './card';

@Component({
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'storybook-pd-app';
  testCard: ICard = {
    title: 'Sample Title',
    subtitle: 'Sample Subtitle',
    content: `Sample Content
    <b>Bold Content</b>
    `,
    link: 'Sample URL',
    entityID: 'D920001',
    special: 'Preferred',
    cardIndex: 1,
    change: 'Modified'
  }
  constructor() {}
}
