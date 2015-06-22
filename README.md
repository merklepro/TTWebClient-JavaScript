# TTWebClient-JavaScript
JavaScript Web API client for TickTrader

## TickTrader Web API interactive documentation
https://tp.dev.soft-fx.eu:5020/api/doc/index

## Sample single-page Web Site based on the JavaScript client
http://softfx.github.io/TTWebClient-JavaScript

##### How to solve "XMLHttpRequest: Network Error 0x80070005, Access is denied"?
If you work with development/staging environment you may have problem with SSL security connections. Only Chrome web browser allows to access SSL resources without valid certificate. For this reason just open above URL with TickTrader Web API interactive documentation, accept the ceritficate and then continue with the site.

## Dependencies for the JavaScript client
JavaScript Web API client for TickTrader depends on [jQuery](https://jquery.com/) and [CryptoJS](https://code.google.com/p/crypto-js/).

You can include them into your code using the following code snipet:
```html
<script src="https://raw.githubusercontent.com/SoftFx/TTWebClient-JavaScript/master/lib/jquery-2.1.4.min.js" type='text/javascript'></script>
<script src="https://raw.githubusercontent.com/SoftFx/TTWebClient-JavaScript/master/lib/Crypto-JS/core-min.js" type='text/javascript'></script>
<script src="https://raw.githubusercontent.com/SoftFx/TTWebClient-JavaScript/master/lib/Crypto-JS/sha256-min.js" type='text/javascript'></script>
<script src="https://raw.githubusercontent.com/SoftFx/TTWebClient-JavaScript/master/lib/Crypto-JS/enc-base64-min.js" type='text/javascript'></script>
```

## Creating Web API client
```JavaScript
<script src="https://raw.githubusercontent.com/SoftFx/TTWebClient-JavaScript/master/ttwebclient.js"></script>
<script type="text/javascript">
  var web_api_address = 'https://tpdemo.fxopen.com:5020';
  var web_api_id = '8bd43d1f-39a4-45cd-a876-6acc0586533d';
  var web_api_key = 'qXhpBKFkndWWGYQ2';
  var web_api_secret = 'dSccqQmtaPc2xB68GD6A7KBgpfRhHJkFe5AchGShbDGzyn8H8ThjPspCq6Yh8cTz';
  
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
      .error(errorHandler)
  }
  catch (err) {
    errorHandler(null, err, null);
  }
}
```
