import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import {MovieNewComponent} from './movie/movie-new.component'


 
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movie-new', component: MovieNewComponent },
    { path: '', component: HomeComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);