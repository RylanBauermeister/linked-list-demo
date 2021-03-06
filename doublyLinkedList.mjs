import {TwoWayNode} from './node.mjs'

export default class DoublyLinkedList {

  constructor(){
    this.head = null;
    this.tail = null;
  }

  //Helper function for when we need to make a new list.
  initialize(val){
    this.head = new TwoWayNode(val)
    this.tail = this.head;
  }

  //Push a value to the end of the list.  If list is empty, initialize it.
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

  //Pop a value off the end of the list.
  pop(){
    if(this.tail === null) return undefined;
    let ret = this.tail.val;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return ret;
  }

  //Shift a value off the front of the list.
  shift(){
    if(this.head === null) return undefined;
    let ret = this.head.val;
    this.head = this.head.next;
    this.head.previous = null;
    return ret;
  }

  //Add a value to the front of the list. If list is empty, initialize it.
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

  //Remove by value.
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

  //Takes a value, returns true if value is in the list.
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

  //Prints the list.
  print(){
    let read = this.head
    let output = ""
    while(read !== null){
      output += read.val + " "
      read = read.next
    }
    return output
  }

  //Prints the list backwards. Just one little perk of being able to read in
  //reverse.
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
