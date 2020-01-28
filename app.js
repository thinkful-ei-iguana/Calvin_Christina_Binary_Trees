const BinarySearchTree = require('./BinarySearchTree');

// 3. Create a BST class
// Walk through the binary search tree code in 
// the curriculum and understand it well. Then 
// write a BinarySearchTree class with its core 
// functions (insert(), remove(), find()) from 
// scratch.

// Create a binary search tree called BST and insert 
// 3,1,4,6,9,2,5,7 into your tree. Compare your
//  result with the result from the 1st exercise.
// Create a binary search tree called BST and insert
// E A S Y Q U E S T I O N into your tree. Compare 
// your result with the result from the 1st exercise.


const BST = function(key, value) {
  if (this.key == null) {
    this.key = key;
    this.value = value;
  } else if (key < this.key) {
    if (this.left == null){
      this.left = new BinarySearchTree(key, value, this);
    } else {
      this.left.insert(key, value);
    }
  } else {
    if (this.right == null) {
      this.right = new BinarySearchTree(key, value, this);
    } else {
      this.right.insert(key, value);
    }
  }
};
 BST()