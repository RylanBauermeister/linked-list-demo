//The basic Node class.  All Linked Lists are made up of a series of traversable nodes.
export class Node {

  //Nodes are initialized with a value, which can be of any data type.
  constructor(val){
    this.val = val
    this.next = null
  }
}

//Bi-directional nodes can keep track of the item in front of them, and the item
//behind them. They are closer to graph nodes, which contain a list of adjacent nodes.
export class TwoWayNode {
  constructor(val){
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}
