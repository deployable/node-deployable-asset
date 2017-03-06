# [Deployable Asset](https://github.com/deployable/node-deployable-asset)

## Web Asset Helpers

Helper methods for assets built with [`deployable-assets`](https://https://github.com/deployable/node-deployable-assets)

Easily reference css, js, and other assets from a build pipeline. Similar to the
way [connect-assets](https://https://github.com/adunkman/connect-assets) references 
assets but without the sprockets pipeline in the app. 

## Install

    yarn add @deployable/asset
    yarn add @deployable/assets --dev

    npm install @deployable/asset --save
    npm install @deployable/assets --save-dev

## Usage

The package also provides a helper class to use in your application to reference
assets. All references to your asset paths should be replaced by the helper so
assets can be served from any location, including the possibiilty of moving them
to a CDN.

```javascript

const { DeployableAsset }  = require('@deployable/asset')

DeployableAsset.js('js/test.js') // =>
DeployableAsset.css('css/test.css') // =>
DeployableAsset.path('fonts/arial.woff2') // =>

```

## API

    let glp = new Gulp()


## About

@deployable/asset is released under the MIT license.

Copyright 2016 Matt Hoyle - code aatt deployable.co

https://github.com/deployable/node-deployable-asset

