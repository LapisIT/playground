import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCardModule,
} from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, MatRippleModule],
  exports: [CardComponent],
})
export class CardModule {}
