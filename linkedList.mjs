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
    //We need to keep track of two values here:
    //read is what we are currently looking at.
    //trail is the node directly behind it. We need to keep track of trail so we
    //can correctly stitch the list back up again.
    let read = this.head;
    let trail = null;
    while(read !== null){
      if(read.val === val){
        //If we're removing the first value, just run shift.
        if(trail === null) {
          this.shift();
          break;
        } else {
          trail.next = read.next;
          this.size--;
          break;
        }
      }
      trail = read;
      read = read.next;
    }
  }

  //Prints the list out.
  print(){
    let read = this.head
    let output = ""
    while(read !== null){
      output += read.val + " "
      read = read.next
    }
    console.log(output)
  }
}
