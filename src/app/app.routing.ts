import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { TransportComponent } from './transport/transport.component';


const appRoutes: Routes = [
    {path: '', component: DashboardComponent,pathMatch: 'full'},
    {path: 'overview', component: OverviewComponent, pathMatch: 'full'},
    {path: 'agenda', component: AgendaComponent, pathMatch: 'full'},
    {path: 'speaker', component: SpeakerComponent, pathMatch: 'full'},
    {path: 'transport', component: TransportComponent, pathMatch: 'full'}
     
     
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);