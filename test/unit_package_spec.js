const { DeployableAsset } = require('../')

describe('unit::deployable-asset', function(){

  describe('package imports', function(){

    it('should attach the DeployableAsset class', function(){
      expect( DeployableAsset ).to.be.ok
    })

  })

})
