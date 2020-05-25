import { createAction, props } from '@ngrx/store'
import { Bookmark } from '../models'

const actionTag = '[Bookmark]'

const addBookmark = createAction(
  `${actionTag} Add`,
  props<{ bookmark: Bookmark }>()
)
const removeBookmark = createAction(
  `${actionTag} Remove`,
  props<{ id: number }>()
)
const getInitialBookmarks = createAction(`${actionTag} Init`)
const getInitialBookmarksSuccess = createAction(
  `${actionTag} Init Success!`,
  props<{ bookmarks: Bookmark[]; loaded: boolean }>()
)
const getInitialBookmarksError = createAction(
  `${actionTag} Init Error!`,
  props<{ error: Error }>()
)

export const bookmarkActions = {
  addBookmark,
  removeBookmark,
  getInitialBookmarks,
  getInitialBookmarksSuccess,
  getInitialBookmarksError,
}
