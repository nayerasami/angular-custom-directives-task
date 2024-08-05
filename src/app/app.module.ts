import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInputsComponent } from './components/form-inputs/form-inputs.component';
import { NoSpecialCharDirective } from './Directives/no-special-char.directive';
import { AcceptOnlyCharDirective } from './Directives/accept-only-char.directive';
import { RestrictArCharDirective } from './Directives/restrict-ar-char.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormInputsComponent,
    NoSpecialCharDirective,
    AcceptOnlyCharDirective,
    RestrictArCharDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
