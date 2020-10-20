import { Component, OnInit} from '@angular/core';
import { DataService } from '../shared/data_services/data.service';
import { IMovie } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    
    movies: IMovie[];
    movieFilter: IMovie[] //used for filtering
    selectedMovie: IMovie;

    constructor(private dataService: DataService) { }

    ngOnInit() { 
        this.dataService.getMovies().subscribe((movies:IMovie[]) => {
            this.movies = movies;
            this.movieFilter = movies; 
        },
        error => {
            console.log('Failed to load movies.'+error);
        });
    }

    onSelect(movie:IMovie):void{
        this.selectedMovie = movie;
    }

    filterMovies(filter:string){
        console.log(filter);
        if(filter.length == 0){
            this.movies = this.movieFilter;
        }else{

            this.movies = this.movieFilter.filter(item => item.Name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        }
    }


    filterByName(filterString:string){
        this.movies = this.movies.filter(filter=>filter.Name == filterString)
    }

    removeMovie(movie:IMovie):void {
        this.selectedMovie = movie;
        this.dataService.deleteMovie(this.selectedMovie.MovieID)
            .subscribe(() => {
                console.log('Movie was deleted successfully. ');
                this.dataService.getMovies().subscribe((movies:IMovie[]) => {
                        this.movies = movies;
                    },
                    error => {
                        console.log('Failed to load movies '+error);
                    });
            },
            error => {
                console.log('Failed while trying to delete the movie. '+error);
            });
    }

}