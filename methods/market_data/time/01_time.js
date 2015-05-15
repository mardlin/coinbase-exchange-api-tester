/**
 * Get the API server's time
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#time
 */

var publicClient = require('../../../client').publicClient;


publicClient.getTime(function(err, response) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(response.body);
});