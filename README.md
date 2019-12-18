# svelte skeleton app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at <https://github.com/ehedenst/svelte-template.>

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit ehedenst/svelte-skeleton-app svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
yarn
```

...then start [Rollup](https://rollupjs.org):

```bash
yarn serve
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `serve` plugin in rollup.config.js and set the host to '0.0.0.0'.

## Building and running in production mode

To create an optimised version of the app:

```bash
yarn build
```

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
yarn global add now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
yarn global add surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
