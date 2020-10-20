import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data_services/data.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IMovie } from '../shared/interfaces';


@Component({
    moduleId: module.id,
    selector: 'movie-new',
    templateUrl: 'movie-new.component.html',
    styleUrls: ['movie-new.component.css']
})
export class MovieNewComponent implements OnInit {
    
     movies:IMovie[];
     movieCreated:boolean = false;

    constructor(private dataService: DataService, 
                private route: ActivatedRoute,
                private location: Location) { }

    

     ngOnInit() { }

     newMovie(name:string, releaseYear:string, descrition:string, director:string){
        this.dataService.createMovie(name,releaseYear,descrition,director)
        .then(empl => {
            this.movies.push(empl);
        });
        this.location.back();
     }


     goBack(): void{
        this.location.back();
    }
}