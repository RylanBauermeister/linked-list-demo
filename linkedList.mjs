class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

export default class LinkedList {
  constructor(val = 0){
    this.head = new Node(val)
    this.tail = this.head
    this.size = 1
  }

  push(val){
    if(this.size === 0){
      this.head = new Node(val)
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val)
      this.tail = this.tail.next
    }
    this.size++;
  }

  pop(val){
    if (this.size === 1) {
      return this.returnHeadAndClear();
    }
    let read = this.head;
    for(let i = 0; i < this.size - 2; i++){
      read = read.next;
    }
    read.next = null;
    this.size--;
    return read.val;
  }

  shift(){
    if (this.size === 1){
      return this.returnHeadAndClear();
    }

    let ret = this.head.val;
    if(this.tail === this.head) this.tail = this.tail.next
    this.head = this.head.next;
    this.size--;
    return ret;
  }

  unshift(val){
    if(this.size === 0){
      this.head = new Node(val)
      this.tail = this.head;
      this.size++;
      return this.size;
    }

    let newHead = new Node(val)
    newHead.next = this.head;
    this.head = newHead;
    this.size++;
    return this.size;
  }

  remove(val){
    let read = this.head;
    let trail = null;
    while(read !== null){
      if(read.val === val){
        trail.next = read.next;
        this.size--;
        break;
      }
      trail = read;
      read = read.next;
    }
  }

  returnHeadAndClear(){
    let ret = this.head.val;
    this.head = null;
    this.tail = null;
    this.size--;
    return ret;
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
    console.log(output)
  }
}
