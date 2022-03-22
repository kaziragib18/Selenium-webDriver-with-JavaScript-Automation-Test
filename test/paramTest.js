//parameterization test: is to enable us to use single test and run it multiple time with differnet test input
//to loop over our test multiple time for different browers
//use mocha to parameterize

//require nodemodules
const { Builder, By, Key } = require("selenium-webdriver");

const ltCapabilities = require("../capabilities");

const should = require('chai').should();

describe("add another new todo to tests", function () {

  var driver;

  const USERNAME = ltCapabilities.capabilities["LT:Options"].user;

  const KEY = ltCapabilities.capabilities["LT:Options"].accessKey;

  // host 
  const GRID_HOST = "hub.lambdatest.com/wd/hub";

  // gridUrl: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
  const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;

  //application url
  const todoEndPoint = "https://lambdatest.github.io/sample-todo-app/";

  browsers = [
    { browser: "Chrome", bVersion: "100.0", os: "Windows 10" },
    { browser: "Firefox", bVersion: "99.0", os: "Windows 10" },
    { browser: "Firefox", bVersion: "97.0", os: "Windows 10" },
  ];
  //using foreach functionality from Mocha documentation wrap it block in the function

  browsers.forEach(({ browser, bVersion, os }) => {

    //it block
    it(`successfully a todo for browser ${browser}, version: ${bVersion}, ${os}`, async function () {
      //changed test name with it block title as well as browser, version ans OS 

      ltCapabilities.capabilities["LT:Options"].platformName = os;

      ltCapabilities.capabilities.browserName = browser;

      ltCapabilities.capabilities.browserVersion = bVersion;

      //changed test name with it block title so to understand which test is currently running
      ltCapabilities.capabilities["LT:Options"].name = this.test.title;

      //Building drive instace using capabilities 
      driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(ltCapabilities.capabilities)
        .build();

      await driver.get(todoEndPoint);

      //add a todo
      await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

      //assert
      let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
        return value
      });

      todoText.should.equal("Learn Selenium");

      await driver.quit();
    });

  });
});

