# UrlShortener

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Running this on your local maching

change `URI` constants to configure doamains according to your local machine in file - `\src\app\shared\service\config\app-config-uri.constants.ts`

For Spring applicaiton change `springBootApphost` to `http://localhost:8080`

For Angular application change `angularAppHost` to `http://localhost:4200/`

Now it can look like - 
```shell
export const URI = {
    springBootApphost: 'http://localhost:8080',
    angularAppHost: 'http://localhost:4200/',
    createShrotUrl: '/url'
}
```

install angular cli(only if not installed)
```shell
npm install -g @angular/cli@latest
```

```shell
npm i
```

```shell
npm start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.




## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
