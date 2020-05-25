import { Injectable } from '@angular/core'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  public open(
    msg: string,
    config: MatSnackBarConfig = {} as MatSnackBarConfig
  ): void {
    this.snackbar.open(msg, 'close', config)
  }

  public close(): void {
    this.snackbar.dismiss()
  }
}
