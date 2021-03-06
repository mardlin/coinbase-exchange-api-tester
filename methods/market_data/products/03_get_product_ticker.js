/**
 * Get product ticker
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#get-product-ticker
 */

var publicClient = require('../../../client').publicClient;


publicClient.getProductTicker(function(err, response, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});