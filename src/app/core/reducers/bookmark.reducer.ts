import { BookmarkState } from '../models'
import { Action, createReducer, on } from '@ngrx/store'
import { bookmarkActions } from '../actions/bookmark.action'
import { ActionReducer } from '@ngrx/store/src/models'

const bookmarkInitialState: BookmarkState = { bookmarks: [], loaded: false }

const bookmarkReducer = createReducer(
  bookmarkInitialState,
  on(bookmarkActions.addBookmark, (state, { bookmark }) => ({
    ...state,
    bookmarks: [...state.bookmarks, bookmark],
  })),
  on(bookmarkActions.removeBookmark, (state, { id }) => ({
    ...state,
    bookmarks: state.bookmarks.filter((bm) => bm.id !== id),
  })),
  on(
    bookmarkActions.getInitialBookmarksSuccess,
    (state, { bookmarks, loaded }) => ({
      bookmarks: [...state.bookmarks, ...bookmarks],
      loaded,
    })
  ),
  on(bookmarkActions.getInitialBookmarksError, (state, { error }) => {
    console.error(error)
    return { bookmarks: [], loaded: true }
  })
)

export function BookmarkReducer(state: BookmarkState, action: Action) {
  return bookmarkReducer(state, action)
}
