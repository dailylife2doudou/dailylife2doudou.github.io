/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/2020/08/22/article81/index.html","949107113b55f3a4351f60c127b3aa5d"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/2020/08/27/article82/index.html","7fe6edba879fd980fe11eae7fdeff800"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/2020/09/04/article91/index.html","f8708610e0e86c5f22b9687b85c10db7"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/2020/09/10/article92/index.html","13c7ed40a041be40f01d0a0cd1a5406d"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/archives/2020/08/index.html","42b46393afbd5e81526d634ae9b5dba8"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/archives/2020/09/index.html","66d207133987af1a6fb8bca1c2b38cf7"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/archives/2020/index.html","641898ee8e47e902956a52041c117af6"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/archives/index.html","44be3dbebaa001f70937f82029ad237a"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/categories/index.html","0d9f246fc3edb68e17f4c9836e71d332"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/categories/学习/index.html","74c8d0fd590bd6d6d50e275ab746a9fd"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/categories/恰饭/index.html","ba55b01e2456a8c2ed56c00f1fc52658"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/categories/游玩/index.html","5b94af9cf89b54d4d3e3c3c6b58a9b75"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/categories/记录/index.html","14787d2b5b9e5b91d54364e49570acca"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/css/index.css","82138d92f720d4364a46cdf5637466a8"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/index.html","9281e3c3012b2d0246399347dfbbbe19"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/main.js","4898030387012f8af71563ef8353433a"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/2008/m1.jpg","b58b64970d3e6f74484febebff326ee2"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/2008/m2.jpg","dacaa00779edc4e4f69eac828174496f"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/2008/t1.jpg","ff70aaa41f7ee90cc4fd4337ec0621a4"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/2009/s1.jpg","4112841770c8814dc36889a56af5fe78"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/2009/s2.jpg","a163e222f3ceab829c9e8f6252363fc1"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/2009/s3.jpg","1002968a2df51f58e7ae68ccec1ecdc7"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/2009/y1.png","94adc106bf790f266b6bbeac7ccb7d29"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/2009/y2.jpg","1b9ec9aa8abc8343f9a12097a50466dd"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/9cc139081177698329caa68bb8fb4130.jpg","67363c667370d057b75c4160e75e981b"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/archive.jpg","6d2b83ce24e128fada1c18d718f9aed3"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/categories.jpg","5b286f03dadbc75856b0a67a0405dc01"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/index.jpg","c0498e91d2b65ca61a63cba031b9e057"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/myimg/tags.jpg","b2f28542dc578e303fb61e5a146cab52"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/tags/curious/index.html","aec3808ad0c75e5736f0b9336986f76e"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/tags/excited/index.html","6aeda2e7a3ccb1ee843863fb23c2ff65"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/tags/happy/index.html","d7ba969a74aa4e5267a8bcf8008c2f71"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/tags/index.html","0588f955823c9eb5e48f6555a243a9eb"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/tags/nervous/index.html","f35167eaff4dfa28f2556104e7c7bd70"],["C:/Users/86185/Desktop/zjq/dougithub/dailylife/public/tags/relaxed/index.html","b4baa78e634191025127578e61133b8c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







