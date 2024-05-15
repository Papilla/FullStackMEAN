import UrlBuilder from "./url.builder.js";

const url = new UrlBuilder()
    .setProtocol('https')
    .setAuthentication('user', 'password')
    .setHostname('www.myhost.com')
    .setPort('3454')
    .build()
    ;

const url2 = new UrlBuilder()
    .setAuthentication('user', 'password')
    .setHostname('www.myhost.com')
    .setPort('3454')
    .build()
    ;

console.log(url.toString());