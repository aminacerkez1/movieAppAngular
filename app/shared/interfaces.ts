export interface IMovie {
    MovieID?: number;
    Name: string;
    ReleaseYear:string;
    Description: string;
    Director:string;
    AverageRating?:number;
    CoverPhoto?:string;
}

export interface IUser {
     UserID?: number;
     FirstName: string;
     LastName: string;
     Username: string;
     PassHash: string;
     PassSalt:string;
}

export interface IRating{
    RatingID:number;
    UserID:number;
    MovieID:number;
    RatingNumber:number;
}
