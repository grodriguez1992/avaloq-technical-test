import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { MatTableModule } from "@angular/material/table";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AllReducers } from "./core/reducers";
import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookmarkTableComponent } from './components/bookmark-table/bookmark-table.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
import { StateMatcherError } from "./core/errors/stateMatcher.error";

@NgModule({
  declarations: [
    AppComponent,
    BookmarkTableComponent,
    BookmarkFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( AllReducers ),
    StoreDevtoolsModule.instrument( { maxAge: 25, logOnly: !environment.production } ),
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [{provide: StateMatcherError, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
