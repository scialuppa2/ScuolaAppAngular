import { Routes } from '@angular/router';
import { ScuolaelementareComponent } from './scuolaelementare/scuolaelementare.component';
import { HeroComponent } from './hero/hero.component';
import { AllieviComponent } from './allievi/allievi.component';
import { LoginComponent } from './login/login.component';

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
        path:'login/:id/:titolo',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path:'allievi',
        component: AllieviComponent,
        title: 'Lista Allievi'
    },
];
