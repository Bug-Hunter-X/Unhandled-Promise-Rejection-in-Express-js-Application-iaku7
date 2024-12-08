# Unhandled Promise Rejection in Express.js Application

This repository demonstrates a common error in Node.js applications using Express.js: improper handling of promise rejections in asynchronous operations.  The application attempts an asynchronous operation that might fail.  When it fails, it doesn't handle the error gracefully, leading to silent failures.  The solution demonstrates how to properly handle these rejections to provide a better user experience and application stability.

## Bug
The `bug.js` file contains the erroneous code. The application responds with 'Hello World!' on success, but doesn't send any response on failure.