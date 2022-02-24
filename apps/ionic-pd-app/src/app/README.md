## How to create ionic app on Angular

[Overview | Nxtend](https://nxtend.dev/docs/ionic-angular/overview/)

1. initialise plugin

  ` npm install --save-dev --exact @nxtend/ionic-angular`

2. generating Applications

  `nx generate @nxtend/ionic-angular:application myApp`

3. the step above need the capacitor plugin to run, to install it

   `npm install --save-dev --exact @nxtend/capacitor`

4. Serve the newly created application

   `npx nx serve ionic-pd-app`


## Routing

[Angular - Lazy-loading feature modules](https://angular.io/guide/lazy-loading-ngmodules)

1. How to add lazy routing module on the project

   `ng generate module blogs --route blogs --module app.module`
