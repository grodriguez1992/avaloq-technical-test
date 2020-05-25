# Avaloq

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Description

This project is very simple, the unique page is implemented on principal Application Component

### Components

- ***Bookmark Form*** : This component contains the form that User use to add new bookmarks
- ***Bookmark Table*** : This component shows all bookmarks and allows filtering by group

### NGRX

#### Actions

- ***addBookmark*** : This action is called when the user adds a new bookmark using the *Bookmark Form* component
- ***removeBookmark*** : It's called when the user clicks the trash icon in *Bookmark Table* component
- ***getInitialBookmarks*** : This action is called when the application starts and tries to load the initial bookmarks
- ***getInitialBookmarksSuccess*** : After executing the previous action and loading the bookmarks without problems
- ***getInitialBookmarksError*** : After executing the above action and an error occurs

#### Effects

Exist only one effect in bookmark effects class and is called when it captured getInitial Bookmarks Action. The effect calls a NodeJS server where is saved the initial bookmarks

#### Selectors & Reducer 

There are three selectors, the first is the general selector and select bookmarkState and the other two return select state properties.
On the reducer it includes all the shares except getInitialBookmarks

### Services 

- ***SnackbarService*** : Service controls the Angular Material Snackbar
- ***BookmarkService*** : The service calls the NodeJS server and gets the bookmarks

## Screenshots

![Screenshot1](https://github.com/grodriguez1992/avaloq-technical-test/blob/master/src/assets/images/sceen1.PNG)
![Screenshot2](https://github.com/grodriguez1992/avaloq-technical-test/blob/master/src/assets/images/sceen2.PNG)
![Screenshot3](https://github.com/grodriguez1992/avaloq-technical-test/blob/master/src/assets/images/sceen3.PNG)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


