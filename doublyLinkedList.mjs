import {Node} from './node.mjs'

export default class DoublyLinkedList {

  constructor(){
    this.head = null;
    this.tail = null;
  }

  initialize(val){
    this.head = new TwoWayNode(val)
    this.tail = this.head;
  }

  push(val){
    if(this.tail === null){
      this.initialize(val)
    } else {
      let newNode = new TwoWayNode(val)
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  }

  pop(){
    if(this.tail === null) return undefined;
    let ret = this.tail.val;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return ret;
  }

  shift(){
    if(this.head === null) return undefined;
    let ret = this.head.val;
    this.head = this.head.next;
    return ret;
  }

  unshift(val){
    if(this.head === null){
      this.initialize(val);
    } else {
      let newNode = new TwoWayNode(val)
      this.head.previous = newNode;
      newNode.next = this.head
      this.head = newNode;
    }
  }

  remove(val){
    let read = this.head;
    while(read !== null){
      if(read.val === val){
        if(read.previous === null) {
          this.head = read.next;
        } else {
          read.previous.next = read.next;
        }
        break;
      }
      read = read.next;
    }
  }

  contains(val){
    let read = this.head;
    while(read !== null){
      if(read.val === val){
        return true;
      }
      read = read.next;
    }
    return false;
  }

  print(){
    let read = this.head
    let output = ""
    while(read !== null){
      output += read.val + " "
      read = read.next
    }
    return output
  }

  reversePrint(){
    let read = this.tail
    let output = ""
    while(read !== null){
      output += read.val + " "
      read = read.previous
    }
    return output
  }

}
