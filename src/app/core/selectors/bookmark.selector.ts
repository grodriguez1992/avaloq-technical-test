import { BookmarkState } from '../models'
import { createSelector } from '@ngrx/store'

export const selectBookmark = (state: { bookmarkState }) => state.bookmarkState

export const selectAllBookmarks = createSelector(
  selectBookmark,
  (state: BookmarkState) => state.bookmarks
)
export const selectLoadedFlag = createSelector(
  selectBookmark,
  (state: BookmarkState) => state.loaded
)
