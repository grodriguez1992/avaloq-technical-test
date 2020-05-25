import { AllStates, BookmarkState } from '../models'
import { createSelector } from '@ngrx/store'

// eslint-disable-next-line
export const selectBookmark = (state: any = {} as AllStates): BookmarkState =>
  state.bookmarkState

export const selectAllBookmarks = createSelector(
  selectBookmark,
  (state: BookmarkState) => state.bookmarks
)
export const selectLoadedFlag = createSelector(
  selectBookmark,
  (state: BookmarkState) => state.loaded
)
