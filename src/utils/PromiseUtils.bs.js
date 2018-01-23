// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict'

var Jest = require('@glennsl/bs-jest/src/jest.js')
var Js_option = require('bs-platform/lib/js/js_option.js')
var Caml_array = require('bs-platform/lib/js/caml_array.js')
var Js_primitive = require('bs-platform/lib/js/js_primitive.js')

function rejectWith (message) {
  return Promise.reject(new Error(message))
}

function logMessage (exn) {
  var message = exn.message
  console.log(message !== undefined ? message : '(no error message)')
  return /* () */ 0
}

function cancelTimeout (delay, message) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      return reject(new Error(message))
    }, delay)
    return /* () */ 0
  })
}

function toString (obj) {
  return Js_option.getExn(Js_primitive.undefined_to_opt(JSON.stringify(obj)))
}

function getOrReject (opt) {
  if (opt) {
    return Promise.resolve(opt[0])
  } else {
    return Promise.reject(new Error('Unable to get'))
  }
}

function expectToReject (withError) {
  return function (param) {
    return param.catch(function (exn) {
      var error = Js_option.getWithDefault(
        'Invalid message',
        Js_primitive.null_undefined_to_opt(exn.message)
      )
      var match = +(error === withError)
      if (match !== 0) {
        return Promise.resolve(Jest.pass)
      } else {
        return Promise.resolve(
          Jest.fail(
            'Error messages did not match\nExpected: ' +
              (withError + ('\nReceived: ' + error))
          )
        )
      }
    })
  }
}

function rejectIfEmpty (error, results) {
  if (results.length !== 0) {
    return Promise.resolve(results)
  } else {
    return Promise.reject(new Error(error))
  }
}

function pickFirst (results) {
  return Promise.resolve(Caml_array.caml_array_get(results, 0))
}

exports.rejectWith = rejectWith
exports.logMessage = logMessage
exports.cancelTimeout = cancelTimeout
exports.toString = toString
exports.getOrReject = getOrReject
exports.expectToReject = expectToReject
exports.rejectIfEmpty = rejectIfEmpty
exports.pickFirst = pickFirst
/* Jest Not a pure module */
