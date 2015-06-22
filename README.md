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
<script src="http://code.jquery.com/jquery-2.1.4.min.js" type='text/javascript'></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/core-min.js" type='text/javascript'></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/sha256-min.js" type='text/javascript'></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/enc-base64-min.js" type='text/javascript'></script>
```
