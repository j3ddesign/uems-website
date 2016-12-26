import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Request } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class GraphqlService {
  fetching: BehaviorSubject<boolean> = new BehaviorSubject(false);
  apiUrl: string = 'https://uems-api.streamshape.io/graphql';
  headers: Headers = new Headers({'Content-Type': 'application/json'});
  options: RequestOptions = new RequestOptions({headers: this.headers});

  _minutes: FileReference[];
  _pictures: FileReference[];
  _people: Person[];

  constructor(private http: Http) {
  }

  get pictures(): Promise<FileReference[]> {
    return new Promise((resolve, reject) => {

      // Check if we already fetched pictures from Graphql
      if (!this._pictures) {

        // Define the query
        const query = "{files(prefix:\"pictures\"){fileName url}}";

        // Run the query with the above query
        this.query(query)

          // Alter the response to only be response.files
          .map((res: any) => res.files)

          // Subscribe to the observable (actually fire it)
          .subscribe(pictures => {

            // Assign the pictures to the correct variable, so that we can check if it's happened before
            this._pictures = pictures;

            // Resolve the pictures (let the promise know we completed)
            resolve(this._pictures);
          });
      } else {
        // Resolve the pictures we already got
        resolve(this._pictures);
      }
    });
  }

  get people(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      if (!this._people) {
        const query = '{people{name email title telephone address country}}';
        this.query(query)
          .map((res: any) => res.people)
          .subscribe(people => {
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
        this.query(query)
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

  query<T>(query: string): Observable<T> {
    // Expose the fact that we're fetching data to components (this lets us add loading spinners etc)
    this.fetching.next(true);

    // Define the request options - url, headers (content-type), and the body (our query)
    const options: RequestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: this.apiUrl,
      headers: this.headers,
      body: JSON.stringify({
        query: query
      })
    });

    // Send off the http request to graphql with the above request options
    return this.http.request(new Request(options))

      // Map the response from JSON to JS
      .map(res => res.json())

      // Expose the fact that we finished fetching
      .do(() => this.fetching.next(false))

      // Log the response to the console (for debug)
      .do(response => console.log(response))

      // All graphql responses are in a "data" object - just return this
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
