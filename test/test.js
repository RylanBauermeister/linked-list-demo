const assert = require('assert');
const chai = require('chai')
import LinkedList from '../linkedList'
import LinkedListHeadAndTail from '../linkedListHeadAndTail'
import DoublyLinkedList from '../doublyLinkedList'

const expect = chai.expect;

describe('Linked List Tests', function(){
  describe('Singly Linked List', function(){
    let ll;
    it("should be able to declare a linked list", function(){
      expect(function(){
        ll = new LinkedList()
      }).to.not.throw();
    })

    it("can push new items into the list", function(){
      ll.push(1)
      ll.push(2)
      ll.push(3)
      assert.equal(ll.print(), "1 2 3 ")
    })

    it("can pop items from end of list", function(){
      assert.equal(ll.pop(), 3)
      assert.equal(ll.pop(), 2)
      assert.equal(ll.pop(), 1)
    })

    it("returns undefined if pop is called on empty list", function() {
      assert.equal(ll.pop(), undefined)
    })

    it("can unshift items onto the front of the list", function(){
      ll.unshift(1)
      ll.unshift(2)
      ll.unshift(3)
      assert.equal(ll.print(), "3 2 1 ")
    })

    it("can remove items by value", function(){
      ll.remove(2)
      assert.equal(ll.print(), "3 1 ")
    })

    it("can validate value presence in the list", function(){
      assert.equal(ll.contains(1), true)
      assert.equal(ll.contains(2), false)
      assert.equal(ll.contains(3), true)
    })

    it("can shift items from the list", function(){
      assert.equal(ll.shift(), 3)
      assert.equal(ll.shift(), 1)
    })

    it("returns undefined if shift is called on empty list", function(){
      assert.equal(ll.shift(), undefined)
    })
  })

  describe("Linked List with tail and size", function(){
    let ll;
    it("should be able to declare a linked list with tail and head", function(){
      expect(function(){
        ll = new LinkedListHeadAndTail()
      }).to.not.throw();
    })

    it("successfully tracks head, tail, and size", function(){
      ll.push(1) // 1
      ll.push(2) // 1 2
      ll.unshift(3) // 3 1 2
      ll.unshift(4) // 4 3 1 2
      assert(ll.head.val, 4)
      assert(ll.tail.val, 2)
      assert(ll.size, 4)
    })

    it("can track head, tail, and size when removing elements", function(){
      assert.equal(ll.shift(), 4)
      assert.equal(ll.pop(), 2)
      assert.equal(ll.head.val, 3)
      assert.equal(ll.tail.val, 1)
      assert.equal(ll.size, 2)
    })

  })

  describe("Doubly Linked List", function(){
    let ll;
    it("can declare a doubly linked list", function(){
      expect(function(){
        ll = new DoublyLinkedList();
      }).to.not.throw();
    })

    it("can track head and tail while moving elements about", function(){
      ll.unshift(2)
      ll.unshift(1)
      ll.push(3)
      ll.push(4)
      assert.equal(ll.print(), "1 2 3 4 ")
      assert.equal(ll.head.val, 1)
      assert.equal(ll.tail.val, 4)

      assert.equal(ll.shift(), 1)
      assert.equal(ll.pop(), 4)
      assert.equal(ll.head.val, 2)
      assert.equal(ll.tail.val, 3)
    })

    it("can print forward and backward", function(){
      assert.equal(ll.print(), "2 3 ")
      assert.equal(ll.reversePrint(), "3 2 ")
    })
  })
})
