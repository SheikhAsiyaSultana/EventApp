import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { routing, appRouterProviders } from './app.routing';
import { RouterModule, Router } from '@angular/router';
import {PopoverModule} from "ng2-popover";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { TransportComponent } from './transport/transport.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OverviewComponent,
    AgendaComponent,
    SpeakerComponent,
    TransportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    PopoverModule
  ],
   providers: [ appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}]
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
