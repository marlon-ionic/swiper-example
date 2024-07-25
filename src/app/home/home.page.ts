import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SlideService } from '../services/slide.service';
import { AsyncPipe } from '@angular/common';

@Component({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [AsyncPipe, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  private readonly slideService = inject(SlideService);
  images$ = this.slideService.picsum$;
  constructor() {
    this.slideService.getPicsum();
  }
}
