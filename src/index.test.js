const { expect } = require("chai");
const { JSDOM } = require("jsdom");

const fs = require("fs");

describe("my first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", () => {
    // get reference of index.html file and put it in memory
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const dom = new JSDOM(index).window;
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("hello");
  });
});
