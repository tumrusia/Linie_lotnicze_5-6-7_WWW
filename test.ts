import { fib } from './main';
import { expect } from "chai";
import "mocha";

describe("Fibonacci 0", () => {
    it("should equal 0 for call with 0", () => {
        expect(fib(0)).to.equal(0);
    });
});

describe("Fibonacci 1", () => {
    it("should equal 1 for call with 1", () => {
        expect(fib(1)).to.equal(1);
    });
});

describe("Fibonacci 7", () => {
    it("should equal 13 for call with 7", () => {
        expect(fib(7)).to.equal(13);
    });
});

describe("Fibonacci 10", () => {
    it("should equal 55 for call with 10", () => {
        expect(fib(10)).to.equal(55);
    });
});