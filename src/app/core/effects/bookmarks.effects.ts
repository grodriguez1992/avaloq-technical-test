import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { bookmarkActions } from "../actions/bookmark.action";
import { switchMap } from "rxjs/operators";
import { BookmarkService } from "../services/bookmark.service";
import { Bookmark } from "../models";

@Injectable()
export class BookmarksEffects {

  @Effect()
  addBookmark = createEffect( () =>
    this.actions$.pipe(
      ofType(bookmarkActions.getInitialBookmarks),
      switchMap( () =>
        this.bookmarkService.getBookmarks().toPromise()
        .then( (bookmarks: Bookmark[]) =>
          bookmarkActions.getInitialBookmarksSuccess( { bookmarks } ))
        .catch( error => bookmarkActions.getInitialBookmarksError( { error }))
      )
    )
  , { dispatch: false });

  constructor (
    private actions$: Actions,
    private bookmarkService: BookmarkService) {}

}
