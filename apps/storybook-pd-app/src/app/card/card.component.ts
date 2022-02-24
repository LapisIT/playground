import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICard } from '.';
@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent {
  @Input() card!: ICard;
  @Input() fromToCard!: boolean;

  @Output() selectedCard = new EventEmitter<ICard>();
  
  selectCard = () => {
    this.selectedCard.next(this.card);
  }
}
