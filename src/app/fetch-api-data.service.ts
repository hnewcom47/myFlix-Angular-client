import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://movies4you-application.herokuapp.com/';  //PUT IN CORRECT API URL HERE!!

@Injectable({
  providedIn: 'root'
})

//User registration
export class UserRegistrationService {
  //Inject the HttpClient module to the constructor params
  //This will provide the HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }

  //making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occured:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}


//User login
@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

  constructor(private http: HttpClient) { }

  // making the api call to the user login endpoint
  public userLogin(userDetails: any): Observable<any> {
    // const token = localStorage.getItem('token');
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Invalid username or password. Please try again.'
    );
  }
}


//Get all movies
@Injectable({
  providedIn: 'root'
})

export class GetAllMoviesService {

  constructor(private http: HttpClient) { }

  // making the api call to the get all movies endpoint
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Get one movie
@Injectable({
  providedIn: 'root'
})

export class GetSingleMovieService {
  constructor(private http: HttpClient) { }

  // making the api call to get single movie information
  getSingleMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Get director
@Injectable({
  providedIn: 'root'
})

export class GetDirectorService {
  constructor(private http: HttpClient) { }

  //making the api call to get director data
  getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/directors/:Name', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Get genre
@Injectable({
  providedIn: 'root'
})

export class GetGenreService {
  constructor(private http: HttpClient) { }

  //making the api call to get genre data
  getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/genres/:Name', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Get user
@Injectable({
  providedIn: 'root'
})

export class GetUserService {
  constructor(private http: HttpClient) { }

  //making the api call to get user data by username
  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.get('${apiUrl}users/${username}', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Get favorite movies for a user
@Injectable({
  providedIn: 'root'
})

export class GetFavoriteMoviesService {
  constructor(private http: HttpClient) { }

  // making the api call to get a user's favorite movies
  getFavoriteMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/:Username/favorites', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Add a movie to favorite movies
@Injectable({
  providedIn: 'root'
})

export class AddFavoriteMovieService {
  constructor(private http: HttpClient) { }

  // making the api call to add a movie to a user's list of favorites
  addFavoriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.post('${apiUrl}users/${username}/favorites/${id}', id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Edit user info
@Injectable({
  providedIn: 'root'
})

export class EditUserService {
  constructor(private http: HttpClient) { }

  // making the api call to edit a user's information
  editUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.put('${apiUrl}users/${username}', userDetails, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Delete user
@Injectable({
  providedIn: 'root'
})

export class DeleteUserService {
  constructor(private http: HttpClient) { }

  // making the api call to delete a user
  deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete('${apiUrl}users/${username}', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
      responseType: 'text',
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}


//Delete a movie from favorite movies
@Injectable({
  providedIn: 'root'
})

export class DeleteFavoriteMovieService {
  constructor(private http: HttpClient) { }

  // making the api call to add a movie to a user's list of favorites
  deleteFavoriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete('${apiUrl}users/${username}/favorites/${id}', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): Response | Object {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        'Error Status code ${error.status}, ' +
        'Error body is: ${error.error}'
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}