hash-jenkins
============

Bob Jenkins lookup2 and one-at-a-time hash functions

[![Build Status](https://img.shields.io/travis/jseidelin/hash-jenkins.svg)](https://travis-ci.org/jseidelin/hash-jenkins)
[![npm version](https://img.shields.io/npm/v/hash-jenkins.svg)](https://www.npmjs.com/package/hash-jenkins)

## Usage

```javascript
var Jenkins = require("hash-jenkins");

// one-at-a-time hash
Jenkins.oaat("hello world"); // 1045060183

// lookup2 hash
Jenkins.lookup2("hello world"); // 447289830
```