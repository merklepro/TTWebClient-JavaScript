# TTWebClient-JavaScript
JavaScript Web API client for TickTrader

## TickTrader Web API interactive documentation
https://docs.merklepro.com

## Sample single-page Web Site based on the JavaScript client
https://github.com/merklepro/TTWebClient-JavaScript

##### How to solve "XMLHttpRequest: Network Error 0x80070005, Access is denied"?
If you work with development/staging environment you may have problem with SSL security connections. Only Chrome web browser allows to access SSL resources without valid certificate. For this reason just open above URL with TickTrader Web API interactive documentation, accept the ceritficate and then continue with the site.

## Dependencies for the JavaScript client
JavaScript Web API client for TickTrader depends on:
- [jQuery](https://jquery.com/)
- [CryptoJS](https://code.google.com/p/crypto-js/).

You can include them into your code using the following code snipet:
```html
<script src="https://raw.githubusercontent.com/merklepro/TTWebClient-JavaScript/master/lib/jquery-2.1.4.min.js" type='text/javascript'></script>
<script src="https://raw.githubusercontent.com/merklepro/TTWebClient-JavaScript/master/lib/Crypto-JS/core-min.js" type='text/javascript'></script>
<script src="https://raw.githubusercontent.com/merklepro/TTWebClient-JavaScript/master/lib/Crypto-JS/sha256-min.js" type='text/javascript'></script>
<script src="https://raw.githubusercontent.com/merklepro/TTWebClient-JavaScript/master/lib/Crypto-JS/enc-base64-min.js" type='text/javascript'></script>
```

## Creating Web API client
```JavaScript
<script src="https://raw.githubusercontent.com/merklepro/TTWebClient-JavaScript/master/index.js"></script>
<script type="text/javascript">
  var web_api_address = 'https://api.merklepro.com';
  var web_api_id = '1de621ca-e686-4ee2-92a5-45c87b4b3fe5';
  var web_api_key = 'czNhCcnK6ydePCHZ';
  var web_api_secret = 'J6Jxc2xPr8JyNpWtyEaCPYpkpJpsSQ38xb9AZNxBAGdtQrNDhQwf9mkWQygCKd6K';
 
  function createWebApiClient() {
    return new TickTraderWebClient(web_api_address, web_api_id, web_api_key, web_api_secret);
  }
</script>
```

## Handle erorrs of JavaScript Web API client
```JavaScript
function errorHandler(x, status, error) {
  disconnect();
  var message = "An error occurred: " + status;
  if (error) {
    message += " (code=" + error + ")";
  }
  alert(message);
}
```

## Access to public trade session information
```JavaScript
function getPublicTradeSessionStatus() {
  try {
    var client = createWebApiClient();
    return client.getPublicTradeSession()
      .done(function (result) {
        console.log(result['PlatformName']);
        console.log(result['PlatformCompany']);
        console.log(result['PlatformAddress']);
        console.log(result['PlatformTimezoneOffset']);
        console.log(result['SessionStatus']);
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to public currencies information
```JavaScript
function getPublicAllCurrencies() {
  try {
    var client = createWebApiClient();
    return client.getPublicAllCurrencies()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Name']);
          console.log(result[key]['Precision']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to public symbols information
```JavaScript
function getPublicAllSymbols() {
  try {
    var client = createWebApiClient();
    return client.getPublicAllSymbols()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Symbol']);
          console.log(result[key]['Precision']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to public feed ticks information
```JavaScript
function getPublicAllTicks() {
  try {
    var client = createWebApiClient();
    return client.getPublicAllTicks()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Symbol']);
          console.log(result[key]['BestBid']['Price']);
          console.log(result[key]['BestAsk']['Price']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to public feed ticks level2 information
```JavaScript
function getPublicAllTicksLevel2() {
  try {
    var client = createWebApiClient();
    return client.getPublicAllTicksLevel2()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Symbol']);
          console.log(result[key]['Bids'].length);
          console.log(result[key]['Asks'].length);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account information
```JavaScript
function getAccount() {
  try {
    var client = createWebApiClient();
    return client.getAccount()
      .done(function (result) {
        console.log(result['Id']);
        console.log(result['Name']);
        console.log(result['Group']);
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account trade session information
```JavaScript
function getTradeSession() {
  try {
    var client = createWebApiClient();
    return client.getTradeSession()
      .done(function (result) {
        console.log(result['SessionStatus']);
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account currencies information
```JavaScript
function getAllCurrencies() {
  try {
    var client = createWebApiClient();
    return client.getAllCurrencies()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Name']);
          console.log(result[key]['Precision']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account symbols information
```JavaScript
function getAllSymbols() {
  try {
    var client = createWebApiClient();
    return client.getAllSymbols()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Symbol']);
          console.log(result[key]['Precision']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account feed ticks information
```JavaScript
function getAllTicks() {
  try {
    var client = createWebApiClient();
    return client.getAllTicks()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Symbol']);
          console.log(result[key]['BestBid']['Price']);
          console.log(result[key]['BestAsk']['Price']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account feed ticks level2 information
```JavaScript
function getAllTicksLevel2() {
  try {
    var client = createWebApiClient();
    return client.getAllTicksLevel2()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Symbol']);
          console.log(result[key]['Bids'].length);
          console.log(result[key]['Asks'].length);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account assets information
Works only for cash accounts!
```JavaScript
function getAllAssets() {
  try {SoftFx
    var client = createWebApiClient();
    return client.getAllAssets()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Currency']);
          console.log(result[key]['Amount']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account positions information
Works only for net accounts!
```JavaScript
function getAllPositions() {
  try {
    var client = createWebApiClient();
    return client.getAllPositions()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Symbol']);
          console.log(result[key]['LongAmount']);
          console.log(result[key]['ShortAmount']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account trades
```JavaScript
function getAllTrades() {
  try {
    var client = createWebApiClient();
    return client.getAllTrades()
      .done(function (result) {
        for (key in result) {
          console.log(result[key]['Id']);
          console.log(result[key]['Type']);
          console.log(result[key]['Symbol']);
          console.log(result[key]['Amount']);
        }
      })
      .error(errorHandler);
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Access to account trade history
```JavaScript
function getTradeHistory() {
  try {
    var client = createWebApiClient();
    var request = {
      TimestampTo: new Date().getTime(),
      RequestPageSize: 100,
      RequestDirection: "Backward"
    };
    return client.getTradeHistory(request)
      .done(function (result) { updateTradeHistoryLoop(client, request, result); })
      .error(errorHandler);    
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}

function updateTradeHistoryLoop(client, request, result) {
  try {
    var lastId = null;
    for (index in records) {
      var history = records[index];
      lastId = getValueOrDefault(history['Id'], null);
      console.log(new Date(history['TransactionTimestamp']).toUTCString());
      console.log(history['TransactionType']);
      console.log(history['TransactionReason']);
      console.log(history['Symbol']);
      console.log(history['TradeId']);
    }

    if (!result['IsLastReport']) {
      request['RequestLastId'] = lastId;
      return client.getTradeHistory(request)
        .done(function (result) { updateTradeHistoryLoop(client, request, result); })
        .error(errorHandler);
    }
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```

## Create, modify and cancel limit order
```JavaScript
function createTrade() {
  try {
    var client = createWebApiClient();
    var request = {
      Type = "Limit", 
      Side = "Buy",
      Symbol = "EURUSD", 
      Amount = 10000, 
      Price = 1.0,
      Comment = "Buy limit from Web API sample"    
    };    
    if (confirm("Do you want to create new trade?")) {
      return client.createTrade(request)
        .done(function (result) {
          alert("New " + result['Type'] + " trade was created at " + result['Price'] + " with Id = " + result['Id']);
        })
        .error(errorHandler)
    }    
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}

function modifyTrade(tradeId) {
  try {
    var client = createWebApiClient();
    var request = {
      Id = tradeId, 
      Comment = "Modified limit from Web API sample"
    };
    if (confirm("Do you want to modify trade with Id = " + tradeId + "?")) {
      return client.modifyTrade(request)
        .done(function (result) {
          alert(result['Type'] + " trade with Id = " + result['Id'] + " was successfully modified!");
        })
        .error(errorHandler)
    }    
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}

function cancelTrade(tradeId) {
  try {
    var client = createWebApiClient();
    if (confirm("Do you want to cancel trade with Id = " + tradeId + "?")) {
      return client.cancelTrade(tradeId)
        .done(function (result) {
          alert("Pending trade with Id = " + tradeId + " was successfully canceled!");
        })
        .error(errorHandler)
    }    
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```
