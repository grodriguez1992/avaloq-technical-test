import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Bookmark } from "../models";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private readonly endpoint = 'https://avaloq-test.herokuapp.com'
  constructor(private http: HttpClient) { }

  public getBookmarks() : Observable<Bookmark[]> {
    return this.http.get(`${this.endpoint}/getBookmarks`).pipe(
      map( (resp: Bookmark[]) => resp )
    );
  }
}
