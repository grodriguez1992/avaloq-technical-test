import { createAction, props } from '@ngrx/store';
import { Bookmark } from "../models/bookmark";

const actionTag: string = '[Bookmark]';

const addBookmark = createAction(`${actionTag} Add`, props<{ bookmark: Bookmark }>());
const addBookmarkSuccess = createAction( `${actionTag} Add Success!`, props<{ bookmark: Bookmark }>());

const removeBookmark = createAction(`${actionTag} Remove`, props<{ id: number }>());
const removeBookmarkSuccess = createAction(`${actionTag} Remove Success!`, props<{ bookmarks: Bookmark[] }>());
const removeBookmarkError = createAction(`${actionTag} Remove Error!`, props<{ error: Error }>());

export const bookmarkActions = {
  addBookmark,
  removeBookmark
};
