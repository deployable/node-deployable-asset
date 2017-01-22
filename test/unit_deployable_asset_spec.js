const expect = require('chai').expect
const { DeployableAsset } = require('../')


describe('unit::deployable-asset::DeployableAsset', function(){

  describe('class', function(){

    it('should return an instance', function(){
      DeployableAsset.createInstance({prefix: '/wakka'})
    })

    it('should return a path', function(){
      expect( DeployableAsset.path('a') ).to.be.ok
    })

    it('should return a js tag', function(){
      expect( DeployableAsset.js('a') ).to.contain( '/wakka/a' )
    })

    it('should return an css tag', function(){
      expect( DeployableAsset.css('a') ).to.contain( '/wakka/a' )
    })

    it('should return a font tag', function(){
      expect( DeployableAsset.font('na','a') ).to.contain( '/wakka/a' )
    })

    it('should return a google font tag', function(){
      expect( DeployableAsset.googleFont('a') ).to.contain( 'css?family=a' )
    })

  })

  describe('instance', function(){

    let ass = null

    beforeEach(function(){
      ass = new DeployableAsset({prefix: 'https://cdn.io'})
    })

    it('should create an instance', function(){
      expect( ass ).to.be.ok
    })

    it('should create an asset path from string', function(){
      expect( ass.path('file.test') ).to.equal( 'https://cdn.io/file.test' )
    })

    it('should create an asset path from array', function(){
      expect( ass.path(['js','file.test']) ).to.equal( 'https://cdn.io/js/file.test' )
    })

    it('should error on an asset path', function(){
      let fn = () => ass.path()
      expect( fn ).to.throw(/requires a file path/)
    })

    it('should create a js script', function(){
      expect( ass.js('js/some.js') ).to.equal( '<script src="https://cdn.io/js/some.js" type="application/javascript"></script>' )
    })

    it('should create a css link tag', function(){
      expect( ass.css('css/some.css') ).to.equal( '<link rel="stylesheet" type="text/css" href="https://cdn.io/css/some.css"/>' )
    })

    it('should create font css', function(){
      let re = /^<style type="text\/css">\n  @font-face \{[\s\S]+\}\n<\/style>$/
      expect( ass.font('Wingdings', 'font/wd.woff') ).to.match( re )
    })

    it('should create font css with url', function(){
      let re = new RegExp('https://cdn.io/font/arial.woff')
      expect( ass.font('Arial', 'font/arial.woff') ).to.match( re )
    })

    it('should error for a font without name', function(){
      let fn = () => ass.font()
      expect( fn ).to.throw(/requires a name/)
    })

    it('should create google font linked css', function(){
      expect( ass.googleFont('Arial') ).to.equal( '<link href="https://fonts.googleapis.com/css?family=Arial" rel="stylesheet">' )
    })

    it('should error for a google font without name', function(){
      let fn = () => ass.googleFont()
      expect( fn ).to.throw(/requires a name/)
    })

  })

})
