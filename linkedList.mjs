import {Node} from './node.mjs'

//Linked List example, basic.
export default class LinkedList {
  constructor(){
    this.head = null
  }

  //Push a value to the end of the list by searching for the end of the list, then appending
  //a new node as the end of the list.
  push(val){
    if(this.head === null){
      this.head = new Node(val)
    } else {
      let read = this.head;
      while(read.next !== null){
        read = read.next;
      }
      read.next = new Node(val)
    }
  }

  //Get the end of the list, then sever it from the list.
  pop(){
    let ret;
    if(this.head === null) return undefined;
    if(this.head.next === null){
      ret = this.head.val
      this.head = null
      return ret;
    }

    let read = this.head

    while(read.next.next !== null){
      read = read.next;
    }

    ret = read.next.val;
    read.next = null;
    return ret;
  }

  //Remove the head.
  shift(){
    if(this.head === null) return undefined;

    let ret = this.head.val;
    this.head = this.head.next;
    return ret;
  }

  //Add tot he front of the list.
  unshift(val){
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
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

  //Search the list for a specific value, remove it if found.
  remove(val){
    if(this.head === null) {
      return -1;
    }
    else if(this.head.val === val) {
      this.head = this.head.next;
      return 1;
    }
    let read = this.head;
    while(read.next !== null){
      if(read.next.val === val){
        read.next = read.next.next;
        return 1;
      }
    }
    return -1;
  }

  //Prints the list out.
  print(){
    let read = this.head
    let output = ""
    while(read !== null){
      output += read.val + " "
      read = read.next
    }
    return output;
  }
}
