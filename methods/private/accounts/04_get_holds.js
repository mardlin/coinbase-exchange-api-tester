/**
 * Get holds
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#get-holds
 */

var async = require('async');
var authedClient = require('../../../client').authedClient;


async.waterfall([
  function(callback) {

    authedClient.getAccounts(function(err, response, accounts) {
      if (err) {
        console.log(err);
        return;
      }

      callback(null, accounts[0].id);
    });

  }, function(accountId) {

    authedClient.getAccountHolds(accountId, function(err, response, data) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(data);
    });

  }
]);