//require nodemodules
const { Builder, By, Key } = require("selenium-webdriver");

const ltCapabilities = require("../capabilities");

// const assert = require("assert");

const should = require('chai').should();


//for running mocha test update package.json file
//change test scripts to run parallel test: "mocha --no-timeouts --parallel"
//then terminal use npm test

//describe block

//we will provide a title and function
describe("add another new todo to tests", function () {

  var driver;
  //conect to lambdatest selerium grid
  //username
  // const USERNAME = "kaziragib18";
  const USERNAME = ltCapabilities.capabilities["LT:Options"].user;

  //key
  // const KEY = "tFeRqQWncdw6rQDCDlyqvKpkGgLkqMwNahooUqBCoag9X0KF8F";
  const KEY = ltCapabilities.capabilities["LT:Options"].accessKey;

  // host 
  const GRID_HOST = "hub.lambdatest.com/wd/hub";

  // URL: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
  const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;

  //application url
  const todoEndPoint = "https://lambdatest.github.io/sample-todo-app/"

  //create drive instace
  //beforeEach block inside describe will execute proior to every it block 
  beforeEach(function () {
    //Building drive instace
    driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(ltCapabilities.capabilities)
      .build();
  });

  afterEach(async function () {
    //close browser
    await driver.quit();
  });



  //it block
  it("successfully add another todo", async function () {

    //launch tthe browser
    //create a brower instace for chrome
    // let driver = await new Builder().forBrowser("chrome").build();


    //navigate to our application
    // await driver.get("https://lambdatest.github.io/sample-todo-app/")
    await driver.get(todoEndPoint);

    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    //assert

    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
      return value
    });

    //assert using build in node assertion
    // assert.strictEqual(todoText, "Learn Selenium");

    //assert using chai using should style
    todoText.should.equal("Learn Selenium");

    //close the browser
    // await driver.quit();



  });

  //new it block
  it("Adding new test for reporting", async function () {

    //launch tthe browser

    // let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our application
    // await driver.get("https://lambdatest.github.io/sample-todo-app/")
    await driver.get(todoEndPoint);

    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn JavaScript", Key.RETURN);

    //assert

    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
      return value
    });

    //assert using build in node assertion
    // assert.strictEqual(todoText, "Learn Selenium");

    //assert using chai using should style
    todoText.should.equal("Learn JavaScript");

    //close the browser
    // await driver.quit();

  });


})

