import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInputsComponent } from './components/form-inputs/form-inputs.component';
import { NoSpecialCharDirective } from './Directives/no-special-char.directive';
import { AcceptOnlyCharDirective } from './Directives/accept-only-char.directive';
import { RestrictArCharDirective } from './Directives/restrict-ar-char.directive';
import { GenericDirectiveDirective } from './Directives/generic-directive.directive';
import { GenericDirDirective } from './Directives/generic-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormInputsComponent,
    NoSpecialCharDirective,
    AcceptOnlyCharDirective,
    RestrictArCharDirective,
    GenericDirectiveDirective,
    GenericDirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
