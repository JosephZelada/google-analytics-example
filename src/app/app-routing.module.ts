import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GAExampleComponent } from './g-a-example/g-a-example.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GAExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {
}
