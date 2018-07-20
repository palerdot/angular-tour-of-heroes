import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimation } from './animations';

@Component({
  templateUrl: './compose-message.component.html',
  styles: [ ':host { position: relative; bottom: 10%; }' ],
  animations: [ slideInDownAnimation ]
})
export class ComposeMessageComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  details: string;
  message: string;
  sending = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.message = 'Ahahhehe ... sending message';

    setTimeout(() => {
      this.sending = false;
      this.closePopup()
    }, 3000)
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // providing 'null' value to named outlet
    // clears the contents of named outlet
    this.router.navigate([{outlets: {popup: null}}]);
  }
}