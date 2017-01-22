const { DeployableAsset } = require('./asset')

const instance = new DeployableAsset({ prefix: '/assets' })

module.exports = ( options = {} ) => { 
  if ( options.prefix === undefined ) options.prefix = '/assets'
  return new DeployableAsset(options)
}

module.exports.DeployableAsset = DeployableAsset

