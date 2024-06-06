import { Routes } from '@angular/router';
import { ScuolaelementareComponent } from './scuolaelementare/scuolaelementare.component';
import { HeroComponent } from './hero/hero.component';
import { AllieviComponent } from './allievi/allievi.component';

export const routes: Routes = [
    {
        path:'',
        component: HeroComponent,
        title: 'Hero'
    },
    {
        path:'scuolaelementare',
        component: ScuolaelementareComponent,
        title: 'Scuola elementare'
    },
    {
        path:'allievi',
        component: AllieviComponent,
        title: 'Lista Allievi'
    },
];
