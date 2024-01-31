import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';
import { OwnersComponent } from './owners/owners.component';
import { VisitsComponent } from './visits/visits.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'pets', component: PetsComponent },
    { path: 'owners', component: OwnersComponent },
    { path: 'visits', component: VisitsComponent },
    { path: 'form', component: FormComponent },

    // Default path
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
