import { Bookmark, BookmarkState } from "../models/bookmark";
import { Action, createReducer, on } from "@ngrx/store";
import { bookmarkActions } from "../actions/bookmark.action";


const bookMarksExample: Bookmark[] = [
  { id: 1, name: 'First BookMark', url: 'fBookmark', group: 'First'},
  { id: 2, name: 'Second BookMark', url: 'sBookmark', group: 'First'},
  { id: 3, name: 'Third BookMark', url: 'tBookmark', group: 'First'},
  { id: 4, name: 'Fourth BookMark', url: 'fBookmark', group: 'Second'},
  { id: 5, name: 'Fifth BookMark', url: 'fBookmark', group: 'Second'},
  { id: 6, name: 'Sixth BookMark', url: 'sBookmark', group: 'Third'},
  { id: 7, name: 'Seventh BookMark', url: 'sBookmark', group: 'Fourth'},
  { id: 8, name: 'Eighth BookMark', url: 'eBookmark', group: 'Fifth'},
];



const bookmarkInitialState: BookmarkState = { bookmarks: [...bookMarksExample] };

const bookmarkReducer = createReducer( bookmarkInitialState,
  on( bookmarkActions.addBookmark, (state, { bookmark }) =>
    ({ bookmarks: [...state.bookmarks,bookmark] })),
  on ( bookmarkActions.removeBookmark, (state, { id }) =>
    ({ bookmarks: state.bookmarks.filter( bm => bm.id !== id ) })
  )
);

export const BookmarkReducer = (state: BookmarkState, action: Action) => bookmarkReducer(state, action);
