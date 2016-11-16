export default class ReactOmniPlugin {
  apply(compiler) {
    compiler.resolvers.normal.plugin('module', function(request, callback) {
      if (request.request === 'react-native') {
        this.doResolve('module', {
          ...request,
          request: 'react-native-web'
        }, callback)
      } else {
        callback()
      }
    })
  }
}
