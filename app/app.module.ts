import { RouterModule, Routes } from '@angular/router';


import { NgModule }      from '@angular/core'; //Used for module component
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

//main components
import {HomeComponent} from './home/home.component'
import {MovieNewComponent} from './movie/movie-new.component'


//Importing my services
import { DataService } from './shared/data_services/data.service';
import { ConfigService } from './shared/api_settings/config.service';

//routing
import {routing} from './app.routes';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    routing
   ],
  declarations: [
    AppComponent,
    HomeComponent,
    MovieNewComponent,
 ],
  bootstrap:    [ AppComponent ],
  providers:[DataService,ConfigService]
})

export class AppModule { }
