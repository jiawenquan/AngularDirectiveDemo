import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PushDeleteModule} from './push-delete/push-delete.module';
// import {PushDeleteDirective} from './push-delete/push-delete.directive';

@NgModule({
  declarations: [
    AppComponent,
    // PushDeleteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PushDeleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
