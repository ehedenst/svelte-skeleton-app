# svelte skeleton app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at <https://github.com/ehedenst/svelte-skeleton-app.>

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
yarn start
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `serve` plugin in rollup.config.js and set the host to '0.0.0.0'.

### Enabling HTTPS

If there is a certificate and key file present, the `yarn start` command will use HTTPS. The certificate file needs to be named `.https.crt`, and the key file should be named `.https.key`.

To easily generate development certificates for `localhost` you can use [mkcert](https://github.com/FiloSottile/mkcert). Once `mkcert` is installed simply issue the following command to generate both a certificate and key file.

```bash
mkcert -key-file .https.key -cert-file .https.crt localhost 127.0.0.1 ::1
```

## Building and running in production mode

To create an optimised version of the app:

```bash
yarn build
```

## Updating PWA content

To generate icons and splashscreens for your PWA simply modify `public/assets/logo.svg` and then regenerate the assets by running:

```bash
yarn assets
```

Information on how to modify how and what assets are generated cane be found in the [pwa-asset-generator](https://github.com/onderceylan/pwa-asset-generator#readme) documentation.

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
