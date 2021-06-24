import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppConfiguration } from './app.configuration';
import { WindowRef } from './shared/window-ref';

@NgModule({
  providers: [
    AppConfiguration,
    WindowRef
  ],
  exports: [
    AppRoutingModule,
    HttpClientModule
  ]
})
export class AppExtrasModule {
}
