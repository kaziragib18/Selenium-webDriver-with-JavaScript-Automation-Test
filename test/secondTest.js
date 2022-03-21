//require nodemodules
const { Builder, By, Key } = require("selenium-webdriver");

// const assert = require("assert");

const should = require('chai').should();


//for running mocha test update package.json file
//change test scripts to run parallel test: "mocha --no-timeouts --parallel"
//then terminal use npm test

//describe block

//we will provide a title and function
describe("add another add to tests", function () {

  //it block
  it("successfully add another todo", async function () {

    //launch tthe browser
    //create a brower instace for chrome
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/")

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
    await driver.quit();



  });

  //new it block
  it("Adding new test for reporting", async function () {

    //launch tthe browser

    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/")

    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn JavaScript", Key.RETURN);

    //assert

    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
      return value
    });

    //assert using build in node assertion
    // assert.strictEqual(todoText, "Learn Selenium");

    //assert using chai using should style
    todoText.should.equal("Learn Selenium");

    //close the browser
    await driver.quit();



  });


})

