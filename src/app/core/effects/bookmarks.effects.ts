import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { bookmarkActions } from "../actions/bookmark.action";
import { finalize, switchMap, tap } from "rxjs/operators";
import { BookmarkService } from "../services/bookmark.service";
import { Bookmark } from "../models";
import { SnackbarService } from "../services/snackbar.service";

@Injectable()
export class BookmarksEffects {

  @Effect()
  addBookmark = createEffect( () =>
    this.actions$.pipe(
      ofType(bookmarkActions.getInitialBookmarks),
      tap( () => this.snackbarService.open('Loading online bookmarks')),
      switchMap( () =>
        this.bookmarkService.getBookmarks().toPromise()
        .then( (bookmarks: Bookmark[]) =>
        {
          this.snackbarService.open('Loaded online bookmarks');
          return bookmarkActions.getInitialBookmarksSuccess( { bookmarks } );
        })
        .catch( error => bookmarkActions.getInitialBookmarksError( { error }))
      ),
    )
  , { dispatch: false });

  constructor (
    private actions$: Actions,
    private bookmarkService: BookmarkService,
    private snackbarService :SnackbarService) {}

}
