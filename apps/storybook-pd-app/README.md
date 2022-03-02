

# Storybook application

This project was generated using [Nx](https://nx.dev/storybook/overview-angular#storybook)

## Creating the app
```
npx nx generate @nrwl/angular:app storybook-pd-app
```

## Adding Storybook to workspace
```
npm add --dev @nrwl/storybook
```

## Adding Storybook Configuration to the app
```
nx g @nrwl/angular:storybook-configuration storybook-pd-app
```

## Running Storybook
```
npx nx run storybook-pd-app:storybook
```

## Cypress tests for Stories
To launch Storybook and run the Cypress tests against the iframe inside of Storybook:
```
npx nx run storybook-pd-app-e2e:e2e
```
The url that Cypress points to should look like this: [Documentations](https://nx.dev/storybook/overview-angular#:~:text=read%20the%20documentation):

`/iframe.html?id=buttoncomponent--primary&args=text:Click+me!;padding;style:default`

- buttoncomponent is a lowercase version of the Title in the *.stories.ts file.
- primary is the name of an individual story.
- style=default sets the style arg to a value of default.

## Common errors & issues

- Node version should be up to date (v17.6.0 used for this project)

