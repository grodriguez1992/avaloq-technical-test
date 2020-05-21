import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Bookmark, BookmarkState } from "../../core/models";
import { bookmarkActions } from "../../core/actions/bookmark.action";
import { StateMatcherError } from "../../core/errors/stateMatcher.error";

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit {

  @ViewChild(FormGroupDirective) formElement: FormGroupDirective;

  public bookmarkForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<BookmarkState>
  ) {
    this.bookmarkForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {

    }

  submit(event) {
    event.preventDefault();
    if (this.bookmarkForm.valid) {
      const bookmark: Bookmark = new Bookmark({...this.bookmarkForm.getRawValue()});
      this.store.dispatch( bookmarkActions.addBookmark({bookmark}));
      this.formElement.resetForm();
    }
  }


}
