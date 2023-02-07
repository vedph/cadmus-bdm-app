# Cadmus MapAeg App

Quick Docker image build:

1. `ng build --configuration production`
2. `docker build . -t vedph2020/cadmus-bdm-app:3.0.0 -t vedph2020/cadmus-bdm-app:latest` (replace with the current version)

Web application frontend for Cadmus Cristoforo Buondelmonti project. This application is built by packing together a number of components:

- _frontend_: the app includes the application and its specific libraries; shared Cadmus libraries (as defined in [Cadmus shell](https://github.com/vedph/cadmus_shell)) are used from NPM.

- _backend_: the corresponding backend API is [Cadmus API](https://github.com/vedph/cadmus_api). The MQDQ project has no specific parts, and thus uses the general-purpose backend with its stock parts and fragments.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## History

### 3.0.0

- 2023-02-07: migrated to ELF-based infrastructure.
- 2022-10-05:
  - updated packages.
  - added preview.

### 2.0.0

- 2022-09-03: updated packages including preview.
- 2022-07-27: upgraded to Angular 14.
- 2021-12-21: upgraded to new shell.
- 2021-12-07 (v.2.0.0): upgraded to refactored API clients.
- 2021-11-11: upgraded Angular.
- 2021-10-16: updated models to use new `DocReference`'s from bricks.
