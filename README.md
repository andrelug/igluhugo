# Iglu Online

**A [Hugo](https://gohugo.io/) template for great websites**

This boilerplate and template are based on [Victor Hugo](https://github.com/netlify/victor-hugo). Please check them out for the boilerplate only.

This is base for using Hugo as a static site generator and Gulp + Webpack as your asset pipeline.

It's setup to use post-css and babel for CSS and JavaScript.

This project is released under the [MIT license](LICENSE). Please make sure you understand its implications and guarantees.

## Usage

Be sure that you have the latest node, npm and [Hugo](https://gohugo.io/) installed. If you need to install hugo on OSX, run:

```bash
brew install hugo
```

If you don't use OSX or don't use homebrew, follow the instructions for installation here instead:

http://gohugo.io/overview/installing/

Next, clone this repository and run:

```bash
npm install
npm start
```

Then visit http://localhost:3000/ - BrowserSync will automatically reload CSS or
refresh the page when stylesheets or content changes.

To build your static output to the `/dist` folder, use:

```bash
npm run build
```

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all layouts can go
|  |--themes           // This is where all themes go
|  |  |--hugo-strada   // This is simple basic theme
|  |  |--iglu          // This is the Iglu theme
|  |  |  |--layouts    // This where all layouts should go
|  |  |  |--static     // This is where the public folders are
|  |--static           // Files in here ends up also in the public folder
|--src                 // Files that will also pass through the asset pipeline
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Files in the static folder ends up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

The `src/js/app.js` file is the entrypoint for webpack and will be built to `/dist/app.js`.

You can use ES6 and use both relative imports or import libraries from npm.

Any CSS file directly under the `src/css/` folder will get compiled with [PostCSS Next](http://cssnext.io/)
to `/dist/css/{filename}.css`. Import statements will be resolved as part of the build

## Deploying to netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now netlify will build and deploy your site whenever you push to git.



## Enjoy!!
