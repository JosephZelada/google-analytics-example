import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WindowRef } from '../shared/window-ref';

declare let gtag: Function;

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'g-a-example',
  template: `
    <div>
      THIS IS A TEST
    </div>
  `
})
export class GAExampleComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private winRef: WindowRef) {
    let googleTrackingCode = '';
    this.loadGoogleTagManagerDynamicallyScript(googleTrackingCode).then(() => console.log('Tag manager loaded'));
    this.loadGoogleAnalyticsDynamicallyScript(googleTrackingCode).then(() => console.log('GA loaded'));
    console.log((<any>window));
    this.logEvent().then(() => console.log('done'));
    this.logPageView();
    this.logPageViewRef();
    this.logPageViewWindow();
  }

  public loadGoogleTagManagerDynamicallyScript(trackingToken: string): Promise<any> {
    const gTagManagerScript = document.createElement('script');
    gTagManagerScript.async = true;
    gTagManagerScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingToken}`;
    document.head.appendChild(gTagManagerScript);
    return new Promise((resolve, reject) => {
      gTagManagerScript.onload = resolve;
    });
  }

  public loadGoogleAnalyticsDynamicallyScript(trackingToken: string): Promise<any> {
    // register google analytics
    const gaScript = document.createElement('script');
    gaScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${trackingToken}');
    `;
    document.head.appendChild(gaScript);
    return new Promise((resolve, reject) => {
      gaScript.onload = resolve;
    });
  }

  public ngOnInit() {
    console.log('We did da init');
    console.log(this.route.url);
  }

  public logEvent(): Promise<any> {
    // register google analytics
    const gaScript = document.createElement('script');
    gaScript.innerHTML = `
      gtag('event', 'add_payment_info', {
        eventCategory: 'habba',
        eventLabel: 'habba',
        eventAction: 'habba',
        eventValue: 12
      });
    `;
    document.head.appendChild(gaScript);
    return new Promise((resolve, reject) => {
      gaScript.onload = resolve;
    });
  }

  public logPageViewRef() {
    this.winRef.nativeWindow.gtag('event', 'add_payment_info', {
      eventCategory: 'habba',
      eventLabel: 'habba',
      eventAction: 'habba',
      eventValue: 12
    });
  }

  public logPageViewWindow() {
    (<any>window).gtag('event', 'add_payment_info', {
      eventCategory: 'habba',
      eventLabel: 'habba',
      eventAction: 'habba',
      eventValue: 12
    });
  }

  public logPageView() {
    gtag('event', 'add_payment_info', {
      eventCategory: 'habba',
      eventLabel: 'habba',
      eventAction: 'habba',
      eventValue: 12
    });
  }
}
