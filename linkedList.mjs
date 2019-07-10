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
  }

  append(val){
    this.tail.next = new Node(val)
    this.tail = this.tail.next
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
