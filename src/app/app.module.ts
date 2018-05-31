import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
