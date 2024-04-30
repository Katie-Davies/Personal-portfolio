param sku string = 'D1'
param location string = 'australiaeast'

var aspName = 'portfolio-asp'
var siteName = 'kdportfolionz'

// app service plan

resource serverFarm 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: aspName
  location: location
  sku: {
    name: sku
  }
}

module site 'br/public:avm/res/web/site:0.3.4' = {
  name: 'siteDeployment'
  params: {
    // Required parameters
    kind: 'app'
    name: siteName

    serverFarmResourceId: serverFarm.id
  }
}
