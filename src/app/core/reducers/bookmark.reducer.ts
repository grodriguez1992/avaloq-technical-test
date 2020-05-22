import { BookmarkState } from "../models/bookmark";
import { Action, createReducer, on } from "@ngrx/store";
import { bookmarkActions } from "../actions/bookmark.action";



const bookmarkInitialState: BookmarkState = { bookmarks: [] };

const bookmarkReducer = createReducer( bookmarkInitialState,
  on( bookmarkActions.addBookmark, (state, { bookmark }) =>
    ({ bookmarks: [...state.bookmarks,bookmark] })),
  on ( bookmarkActions.removeBookmark, (state, { id }) =>
    ({ bookmarks: state.bookmarks.filter( bm => bm.id !== id ) })),
  on( bookmarkActions.getInitialBookmarksSuccess, ( state, { bookmarks } ) =>
    ({ bookmarks: [...state.bookmarks, ...bookmarks] })),
  on( bookmarkActions.getInitialBookmarksError, (state, { error}) => {
    console.error(error);
    return new BookmarkState();
  })
);

export function BookmarkReducer(state: BookmarkState, action: Action) { return bookmarkReducer(state, action) }
