import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { MatSnackBarRef } from "@angular/material/snack-bar/typings/snack-bar-ref";
import { SimpleSnackBar } from "@angular/material/snack-bar/typings/simple-snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  public open(msg: string, config: MatSnackBarConfig = {} as MatSnackBarConfig) {
    this.snackbar.open(msg, 'close' , config);
  }

  public close() {
    this.snackbar.dismiss();
  }
}
