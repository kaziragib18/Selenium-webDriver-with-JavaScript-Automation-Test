//require nodemodules
const { Builder, By, Key } = require("selenium-webdriver");

// const assert = require("assert"); 

const should = require('chai').should();


//for running mocha test update package.json file
//change test scripts to : "mocha --no-timeouts"
//change test scripts for parallel if multiple tests: "mocha --no-timeouts --parallel mochawesome"
//used another flag in test script to generate mochawesome report:  "mocha --no-timeouts --parallel --reporter"
//register mochawesome as hook for running parallel test : "mocha --no-timeouts --parallel --reporter --require mochawesome/register"
//For creating custom directory & fileName for mochawesome test report add flag: --reporter-options reportDir=testReport,reportFilename=testResult
//then terminal use npm test


//describe block

//we will provide a title and function
describe("add to tests", function () {

  //it block
  it("successfull added a new todo", async function () {

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


})




// async function example() {

  //launch tthe browser
  //create a brower instace for chrome

  // let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our application

  // await driver.get("https://lambdatest.github.io/sample-todo-app/")

  //add a todo
  //findElement to locate textbox and add a todo
  //Key.RETURN to mimic return or enter or add to the todo list

  // await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

  //assert
  //find last element of the list and retrive the text value and store in todoText by using a function
  //xpath to find the last element of the list
  
  // let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
  //   return value
  // });

  //assert using build in node assertion
  //strictEqual used to check to string match
  //1st string we get from todoText that is retrived from list
  //2nd is expected string which is "Learn Selenium" which is the last added todo

  // assert.strictEqual(todoText, "Learn Selenium");

  //assert using chai using should style
  //todoText is matched with expected value "Learn Selenium" from the list

  // todoText.should.equal("Learn Selenium");

  //close the browser
  // await driver.quit();

// }

// example()