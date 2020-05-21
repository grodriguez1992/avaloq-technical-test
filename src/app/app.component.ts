import { Component, OnInit, ViewChild } from '@angular/core';
import { Bookmark, BookmarkState } from "./core/models";
import { select, Store } from "@ngrx/store";
import { MatTableDataSource } from "@angular/material/table";
import { selectAllBookmarks } from "./core/selectors/bookmark.selector";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'avaloq';

  constructor () {}

  ngOnInit (): void {}

}
