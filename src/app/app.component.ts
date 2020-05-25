import { Component, OnInit, ViewChild } from '@angular/core';
import { BookmarkState } from "./core/models";
import { select, Store } from "@ngrx/store";
import { bookmarkActions } from "./core/actions/bookmark.action";
import { selectLoadedFlag } from "./core/selectors/bookmark.selector";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor (
    private store: Store<BookmarkState>,
    private spinner: NgxSpinnerService
  ) {
    this.store.pipe( select( selectLoadedFlag ) ).subscribe( (loaded: boolean) => {
      loaded ?
        setTimeout( () => this.spinner.hide('appSpinner'), 1000 ) :
        this.spinner.show('appSpinner');
    });
  }

  ngOnInit (): void {
    this.store.dispatch(bookmarkActions.getInitialBookmarks());
  }

}
