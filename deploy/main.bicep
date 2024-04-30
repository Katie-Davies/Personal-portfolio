var aspName = 'portfolio-asp'
var siteName = 'kdportfolionz'

// app service plan
module asp 'br/public:avm/res/web/serverfarm:0.1.1' = {
  name: 'aspDeploy'
  params: {
    name: aspName
    sku: {
      skuName: 'B1'
    }
  }
}

module site 'br/public:avm/res/web/site:0.3.4' = {
  name: 'siteDeployment'
  params: {
    // Required parameters
    kind: 'app'
    name: siteName
    serverFarmResourceId: asp.outputs.resourceId
  }
}
