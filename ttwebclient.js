/**
 * JavaScript TickTrader Web API client
 * Created by ivan.shynkarenka on 11.06.2015
 */

var TickTraderWebClient = function(web_api_address, web_api_id, web_api_key, web_api_secret) {
    if (!web_api_address) {
        throw "TickTrader Web API address should be valid!";
    }
    this.web_api_address = web_api_address;
    this.web_api_id = web_api_id;
    this.web_api_key = web_api_key;
    this.web_api_secret = web_api_secret;
}

/**
 * Get public trade session information
 * @returns Public trade session information
 */
TickTraderWebClient.prototype.getPublicTradeSession = function() {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/tradesession",
        type: "GET"
    });
};

/**
 * Get list of all available public currencies
 * @returns List of all available public currencies
 */
TickTraderWebClient.prototype.getPublicAllCurrencies = function() {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/currency",
        type: "GET"
    });
};

/**
 * Get public currency by name
 * @param currency Currency name
 * @returns Public currency with the given name
 */
TickTraderWebClient.prototype.getPublicCurrency = function(currency) {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/currency/" + encodeURIComponent(encodeURIComponent(currency)),
        type: "GET"
    });
};

/**
 * Get list of all available public symbols
 * @returns List of all available public symbols
 */
TickTraderWebClient.prototype.getPublicAllSymbols = function() {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/symbol",
        type: "GET"
    });
};

/**
 * Get public symbol by name
 * @param symbol Symbol name
 * @returns Public symbol with the given name
 */
TickTraderWebClient.prototype.getPublicSymbol = function(symbol) {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/symbol/" + encodeURIComponent(encodeURIComponent(symbol)),
        type: "GET"
    });
};

/**
 * Get list of all available public feed ticks
 * @returns List of all available public feed ticks
 */
TickTraderWebClient.prototype.getPublicAllTicks = function() {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/tick",
        type: "GET"
    });
};

/**
 * Get public feed tick by symbol name
 * @param symbol Symbol name
 * @returns Public feed tick with the given symbol name
 */
TickTraderWebClient.prototype.getPublicTick = function(symbol) {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/tick/" + encodeURIComponent(encodeURIComponent(symbol)),
        type: "GET"
    });
};

/**
 * Get list of all available public feed level2 ticks
 * @returns List of all available public feed level2 ticks
 */
TickTraderWebClient.prototype.getPublicAllTicksLevel2 = function() {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/level2",
        type: "GET"
    });
};

/**
 * Get public feed level2 tick by symbol name
 * @param symbol Symbol name
 * @returns Public feed level2 tick with the given symbol name
 */
TickTraderWebClient.prototype.getPublicTickLevel2 = function(symbol) {
    return $.ajax({
        url: this.web_api_address + "/api/v1/public/level2/" + encodeURIComponent(encodeURIComponent(symbol)),
        type: "GET"
    });
};
