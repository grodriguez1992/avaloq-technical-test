import { Component, OnInit, ViewChild } from '@angular/core'
import { Bookmark, BookmarkState } from '../../core/models'
import { MatTableDataSource } from '@angular/material/table'
import { select, Store } from '@ngrx/store'
import { selectAllBookmarks } from '../../core/selectors/bookmark.selector'
import { MatPaginator } from '@angular/material/paginator'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { bookmarkActions } from '../../core/actions/bookmark.action'
import { MatSelect } from '@angular/material/select'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-bookmark-table',
  templateUrl: './bookmark-table.component.html',
  styleUrls: ['./bookmark-table.component.scss'],
})
export class BookmarkTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
  @ViewChild(MatSelect, { static: true }) selector: MatSelect

  bookmarks: Bookmark[] = []
  dataSource: MatTableDataSource<Bookmark> = new MatTableDataSource<Bookmark>(
    this.bookmarks
  )

  displayedColumns: string[] = ['name', 'url', 'group', 'actions']

  faTrash = faTrash

  constructor(private store: Store<BookmarkState>) {
    this.dataSource.filterPredicate = (data, filter) => data.group === filter
    this.store
      .pipe(select(selectAllBookmarks))
      .subscribe((bookmarks: Bookmark[]) => {
        this.bookmarks = bookmarks
        this.dataSource.data = this.bookmarks
        setTimeout(() => (this.dataSource.paginator = this.paginator))
      })
  }

  ngOnInit(): void {
    this.selector.valueChange
      .pipe(tap((param: string) => (this.dataSource.filter = param)))
      .subscribe()
  }

  getBookmarksGroups(): string[] {
    return this.bookmarks
      ? [...new Set(this.bookmarks.map((bm) => bm.group))]
      : []
  }

  deleteBookmark(id: number): void {
    this.store.dispatch(bookmarkActions.removeBookmark({ id }))
    this.dataSource.filter = this.selector.value
  }
}
