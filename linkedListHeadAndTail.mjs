import {Node} from './node.mjs'


//Linked List Data Structure
export default class LinkedListHeadAndTail {

  //Initialize a new singly linked list with a head, tail, and size.
  constructor(val){
    this.head = null
    this.tail = this.head
    this.size = 0
  }

  //Push a value onto the end of the list.
  push(val){
    //If size is zero, then we are pushing a new head/tail.
    if(this.size === 0){
      this.head = new Node(val)
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val)
      this.tail = this.tail.next
    }
    this.size++;
  }

  //Pop the last value off the linked list, return its value;
  pop(val){
    //If size is zero, list is empty. Return nothing.
    if(this.size === 0){
      return undefined;
    }
    //If size is one, destroy the head and tail and set the size to zero.
    if (this.size === 1) {
      return this.returnHeadAndClear();
    }
    //Otherwise, go to one before the end of the linked list, and set its next
    //value to null, thus severing the end of the list.
    let read = this.head;
    for(let i = 0; i < this.size - 2; i++){
      read = read.next;
    }
    read.next = null;
    this.size--;
    return read.val;
  }

  //Remove the first item of the linked list.
  shift(){
    //If list is empty, return nothing.
    if(this.size === 0){
      return undefined;
    }
    //If list is size one, nuke remaining list.
    if (this.size === 1){
      return this.returnHeadAndClear();
    }

    //Otherwise, the head bumps down its next value.
    let ret = this.head.val;
    this.head = this.head.next;
    this.size--;
    return ret;
  }

  //Add a new value to the front of the list.
  unshift(val){
    //If the list was empty, reinstantiate the list.
    if(this.size === 0){
      this.head = new Node(val)
      this.tail = this.head;
      this.size++;
      return this.size;
    }

    //Otherwise, create a new head and set the old head as its next parameter.
    let newHead = new Node(val)
    newHead.next = this.head;
    this.head = newHead;
    this.size++;
    return this.size;
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

  //Sets head and tail to null (clears the list), then returns the old value of head.
  returnHeadAndClear(){
    let ret = this.head.val;
    this.head = null;
    this.tail = null;
    this.size = 0;
    return ret;
  }

  //Checks if the list contains the given value.
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
