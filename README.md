# ua-specific-memory-test

Test [performance.measureUserAgentSpecificMemory](https://developer.mozilla.org/en-US/docs/Web/API/Performance/measureUserAgentSpecificMemory) API

## Prepare server

~~~ bash
$ cd ua-server
$ npm i
$ npm run keygen
 :
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:
Email Address []:
$ npm start
 :
Listening on port 3000
~~~

## Prepare client

~~~ bash
$ cd ua-client
$ npm i
~~~

## Test by Electron

You can use:

- `npm start` to open https://localhost:3000/ or
- `npm run co` to open https://localhost:3000/co

~~~ bash
$ npm start

crossOriginIsolated...
false

SharedArrayBuffer allocation...
Error: window.SharedArrayBuffer is not a constructor

performance.measureUserAgentSpecificMemory...
Error: performance.measureUserAgentSpecificMemory is not a function
~~~

~~~ bash
$ npm run co

crossOriginIsolated...
true

SharedArrayBuffer allocation...
OK

performance.measureUserAgentSpecificMemory...
Error. took 0.00 sec.
{
  "stack": "Error: Failed to execute 'measureUserAgentSpecificMemory' on 'Performance': performance.measureUserAgentSpecificMemory is not available.\n    at perfMemoryTest (https://localhost:3000/co:41:21)\n    at https://localhost:3000/co:60:5"
}
~~~

## Test by Chrome

On the Windows 10, Chrome Version 109.0.5414.120 (Official Build) (64-bit)  
Please ignore the cert error.

Open https://localhost:3000/  

~~~ text
crossOriginIsolated...
false

SharedArrayBuffer allocation...
Error: window.SharedArrayBuffer is not a constructor

performance.measureUserAgentSpecificMemory...
Error: performance.measureUserAgentSpecificMemory is not a function
~~~

Open https://localhost:3000/co  

~~~ text
crossOriginIsolated...
true

SharedArrayBuffer allocation...
OK

performance.measureUserAgentSpecificMemory...
OK. took 12.07 sec.
{
  "breakdown": [
    {
      "attribution": [],
      "bytes": 15536,
      "types": [
        "DOM"
      ]
    },
    {
      "attribution": [],
      "bytes": 378793,
      "types": [
        "Shared"
      ]
    },
    {
      "attribution": [
        {
          "scope": "Window",
          "url": "https://localhost:3000/co"
        }
      ],
      "bytes": 191580,
      "types": [
        "JavaScript"
      ]
    },
    {
      "attribution": [],
      "bytes": 0,
      "types": []
    }
  ],
  "bytes": 585909
}
~~~