export class Bookmark {
  id: number = Date.now();
  name: string;
  url: string;
  group: string;
  constructor (params: Bookmark = {} as Bookmark) {
    for (const key of Object.keys( params)){
      this[key] = params[key];
    }
  }
}

export class BookmarkState {
  bookmarks: Bookmark[] = [];
  loaded: boolean = false;
}
