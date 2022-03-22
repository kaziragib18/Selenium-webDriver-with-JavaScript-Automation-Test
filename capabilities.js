//Desired Capabilities are a set of properties used to configure Selenium
//tests on the LambdaTest Selenium grid.
// https://www.lambdatest.com/capabilities-generator/

var capabilities = {
  'LT:Options': {
    "user": "kaziragib18",
    "accessKey": "tFeRqQWncdw6rQDCDlyqvKpkGgLkqMwNahooUqBCoag9X0KF8F",
    "build": "Headless Build",
    "name": "Selenium Test",
    "platformName": "Windows 10",
    "selenium_version": "4.0.0",
    "headless": false
  },
  "browserName": "Chrome",
  "browserVersion": "100.0",
}

module.exports = {
  capabilities
};