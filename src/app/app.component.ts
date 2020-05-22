import { Component, OnInit, ViewChild } from '@angular/core';
import { BookmarkState } from "./core/models";
import { Store } from "@ngrx/store";
import { bookmarkActions } from "./core/actions/bookmark.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor (private store: Store<BookmarkState>) {}

  ngOnInit (): void {
    this.store.dispatch(bookmarkActions.getInitialBookmarks());
  }

}
