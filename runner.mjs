// To run in terminal, use:
// node --experimental-modules runner.mjs
// NOTE: You will need to use the .mjs file type to do this.
import LinkedList from './linkedList'

let ll = new LinkedList()
ll.push(1);
ll.push(2);
ll.push(3);

ll.print();

ll.remove(1);
ll.remove(333);
ll.print();
ll.pop();
ll.pop();
ll.pop();
ll.print();

ll.unshift(1)
ll.unshift(2)
ll.unshift(3)
ll.print();
console.log(ll.head.val)

console.log(ll.shift());
console.log(ll.shift());
console.log(ll.shift());
ll.print();

ll.push(1)
ll.print();

console.log(ll.contains(1))
console.log(ll.contains(2))

//This is a test!
