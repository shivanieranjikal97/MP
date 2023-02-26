import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpitPipe } from './spit.pipe';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';



@NgModule({
  declarations: [AppComponent, SpitPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule {}
