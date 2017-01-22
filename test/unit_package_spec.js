const asset = require('../')
const DeployableAsset = asset.DeployableAsset

describe('unit::deployable-asset', function(){

  describe('package imports', function(){

    it('should attach the DeployableAsset class', function(){
      expect( DeployableAsset ).to.be.ok
    })

    it('should return a DeployableAsset class with defaults', function(){
      expect( asset() ).to.be.ok
    })

    it('should return a DeployableAsset class with custom prefix', function(){
      expect( asset({ prefix: '/test' }) ).to.be.ok
    })

  })

})
