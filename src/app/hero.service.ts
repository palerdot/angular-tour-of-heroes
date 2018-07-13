import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // get detail of single hero
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Porumai fetching hero - ${id}`);
    // return of(HEROES.find((hero) => hero.id === id));

    // construct the url
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url)
            .pipe(
              tap(_ => this.log(`Fetched hero - ${id}`)),
              catchError( this.handleError<Hero>(`getHero = ${id}`) )
            )
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Porumai! kounds heroes fetched");
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  // add a new hero
  addHero(hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
            .pipe(
              tap((hero: Hero) => this.log(`Added hero - ${hero.id} - ${hero.name}`)),
              catchError(this.handleError<Hero>('addHero'))
            )
  }

  // delete hero
  deleteHero(hero: Hero): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  // update the hero on the server
  updateHero(hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.heroesUrl, hero, httpOptions)
              .pipe(
                tap(_ => this.log(`updated hero - ${hero.id}`)),
                catchError(this.handleError<any>('updateHero'))
              )
  }

  // search hero
  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
            .pipe(
              tap(_ => this.log(`found heroes matching ${term}`)),
              catchError(this.handleError<Hero[]>('search heroes', []))
            )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', defaultResult?: T) {
    // returns a function
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      // we are passing 'empty array' as result
      return of(defaultResult as T);
    }
  }
}
