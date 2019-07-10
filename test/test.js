const assert = require('assert');
const chai = require('chai')
import LinkedList from '../linkedList'

const expect = chai.expect;

describe('Linked List Tests', function(){
  describe('Singly Linked List', function(){

    it("should be able to declare a linked list", function(){
      expect(function(){
        let ll = new LinkedList()
      }).to.not.throw();
    })

    let sll = new LinkedList();
    it("can push new items into the list", function(){
      sll.push(1)
      sll.push(2)
      sll.push(3)
      assert.equal(sll.print(), "1 2 3 ")
    })

    it("can pop items from end of list", function(){
      assert.equal(sll.pop(), 3)
      assert.equal(sll.pop(), 2)
      assert.equal(sll.pop(), 1)
    })

    it("returns undefined if pop is called on empty list", function() {
      assert.equal(sll.pop(), undefined)
    })

    it("can unshift items onto the front of the list", function(){
      sll.unshift(1)
      sll.unshift(2)
      sll.unshift(3)
      assert.equal(sll.print(), "3 2 1 ")
    })

    it("can remove items by value", function(){
      sll.remove(2)
      assert.equal(sll.print(), "3 1 ")
    })

    it("can validate value presence in the list", function(){
      assert.equal(sll.contains(1), true)
      assert.equal(sll.contains(2), false)
      assert.equal(sll.contains(3), true)
    })

    it("can shift items from the list", function(){
      assert.equal(sll.shift(), 3)
      assert.equal(sll.shift(), 1)
    })

    it("returns undefined if shift is called on empty list", function(){
      assert.equal(sll.shift(), undefined)
    })
  })
})
