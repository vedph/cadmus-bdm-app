# CadmusBdmApp

Quick Docker image build:

1. `ng build --prod`
2. `docker build . -t vedph2020/cadmus-bdm-app:1.0.0 -t vedph2020/cadmus-bdm-app:latest` (replace with the current version)

Web application frontend for Cadmus Cristoforo Buondelmonti project. This application is built by packing together a number of components:

- _frontend_: the app includes the application and its specific libraries; shared Cadmus libraries (as defined in [Cadmus shell](https://github.com/vedph/cadmus_shell)) are used from NPM.

- _backend_: the corresponding backend API is [Cadmus API](https://github.com/vedph/cadmus_api). The MQDQ project has no specific parts, and thus uses the general-purpose backend with its stock parts and fragments.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
