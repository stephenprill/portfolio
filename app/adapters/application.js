import ENV from '../config/environment';

export default DS.ActiveModelAdapter.extend({

  // slight hack until the ember-cli-dotenv package is fixed
  host: ENV.adapterURL || ENV.ADAPTER_URL

});
