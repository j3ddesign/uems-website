import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Request } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GraphqlService {
  fetching: BehaviorSubject<boolean> = new BehaviorSubject(false);
  apiUrl: string = 'https://i8wjtgp0ij.execute-api.us-west-2.amazonaws.com/prod/graphql';
  headers: Headers = new Headers({'Content-Type': 'application/json'});
  options: RequestOptions = new RequestOptions({headers: this.headers});

  _minutes: FileReference[];
  _pictures: FileReference[];
  _people: Person[];

  constructor(private http: Http) {
  }

  get people(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      if (!this._people) {
        const query = '{people{name email title telephone address country}}';
        this.query(query)
          .map((res: any) => res.people).subscribe(people => {
          this._people = people;
          resolve(this._people);
        });
      } else {
        resolve(this._people);
      }
    });
  }

  get minutes(): Promise<MinutesReference[]> {
    return new Promise((resolve, reject) => {
      if (!this._minutes) {
        const query = '{minutes{fileName year location url}}';
        return this.query(query)
          .map((res: any) => res.minutes)
          .subscribe(minutes => {
            this._minutes = minutes;
            resolve(this._minutes);
          });
      } else {
        resolve(this._minutes);
      }
    });
  }

  get pictures(): Promise<FileReference[]> {
    return new Promise((resolve, reject) => {
      if (!this._minutes) {
        const query = "{files(prefix:\"pictures\"){fileName url}}";
        return this.query(query)
          .map((res: any) => res.files)
          .subscribe(pictures => {
            this._pictures = pictures;
            resolve(this._pictures);
          });
      } else {
        resolve(this._pictures);
      }
    });
  }

  query<T>(query: string): Observable<T> {
    this.fetching.next(true);
    const options: RequestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: this.apiUrl,
      headers: this.headers,
      body: JSON.stringify({
        query: query
      })
    });
    return this.http.request(new Request(options))
      .map(res => res.json())
      .do(() => this.fetching.next(false))
      .do(response => console.log(response))
      .map((res: any) => {
        return res.data;
      });
  }

}

export interface Person {
  address: string | null;
  country: string | null;
  email: string | null;
  name: string;
  telephone: string | null;
  title: string;
}
export interface MinutesReference {
  fileName: string;
  year: string;
  location: string;
  url: string;
}
export interface FileReference {
  fileName: string;
  url: string;
}
