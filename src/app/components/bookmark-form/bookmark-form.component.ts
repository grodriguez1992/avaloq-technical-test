import { Component, ViewChild } from '@angular/core'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { Bookmark, BookmarkState } from '../../core/models'
import { bookmarkActions } from '../../core/actions/bookmark.action'
import { SnackbarService } from '../../core/services/snackbar.service'

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss'],
})
export class BookmarkFormComponent {
  @ViewChild(FormGroupDirective, { static: true }) form: FormGroupDirective

  public bookmarkForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private store: Store<BookmarkState>,
    private snackbarService: SnackbarService
  ) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'

    this.bookmarkForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required, Validators.pattern(reg)]),
      group: new FormControl('', [Validators.required]),
    })
  }

  submit(): void {
    if (this.bookmarkForm.valid) {
      this.snackbarService.open('Added new bookmark')
      const bookmark: Bookmark = new Bookmark({
        ...this.bookmarkForm.getRawValue(),
      })
      this.store.dispatch(bookmarkActions.addBookmark({ bookmark }))
      this.form.resetForm()
    }
  }
}
