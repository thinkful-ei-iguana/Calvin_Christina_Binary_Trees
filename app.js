const BST = require('./BinarySearchTree');

/* SEE GIST
https://gist.github.com/mweedman/a8f619fef6233b709c99eb1667c9d4fe
*/

//2 - Remove the Root

/* SEE GIST
https://gist.github.com/mweedman/a8f619fef6233b709c99eb1667c9d4fe
*/

//3 - Create the BST class

function numberTree() {
  let firstTree = new BST();
  firstTree.insert(3, 3);
  firstTree.insert(1, 1);
  firstTree.insert(4, 4);
  firstTree.insert(6, 6);
  firstTree.insert(9, 9);
  firstTree.insert(2, 2);
  firstTree.insert(5, 5);
  firstTree.insert(7, 7);

  return firstTree;
}

function letterTree() {
  let lTree = new BST();

  lTree.insert('E', 'E');
  lTree.insert('A', 'A');
  lTree.insert('S', 'S');
  lTree.insert('Y', 'Y');
  lTree.insert('Q', 'Q');
  lTree.insert('U', 'U');
  lTree.insert('E', 'E');
  lTree.insert('S', 'S');
  lTree.insert('T', 'T');
  lTree.insert('I', 'I');
  lTree.insert('O', 'O');
  lTree.insert('N', 'N');

  lTree.remove('E');
  // console.log('@Y: ', lTree.find('Y'));
  return lTree;
}

// console.log(numberTree());
// letterTree();
// console.log();

//4 - What does this program do?
// function tree(t){
//     if(!t){
//         return 0;
//     }
//     return tree(t.left) + t.value + tree(t.right)
// }
//  This function sums the values of all of the nodes in the tree. The run time is O(n)//

//5 - Height of a BST
let heightCount = 0;
function height(tree) {
  if (!tree) {
    return;
  } else if (!tree.left && !tree.right) {
    heightCount++;
    return heightCount;
  } else if (tree.right) {
    heightCount++;
    height(tree.right);
  } else if (tree.left) {
    heightCount++;
    height(tree.left);
  }

  return 'The height of the tree is: ' + heightCount;
}

console.log(height(numberTree()));

//6 - Is it a BST?
function BinaryTree () {
  this.root = null;
}
  
let last_logged;
  
function isBST (root) {
  
  if (root === null) { // base case
    return true;
  }
 
  if (!isBST(root.left)) {
    return false;
  }
 
  if (last_logged !== null && root.data <= last_logged) {
    return false;
  }
  
  console.log('Current Node : ', root.data);
  last_logged = root.data;
  
  if (!isBST(root.right)) {
    return false;
  }
  
  return true;
}
  
// Create a Binary Tree as a sample input
let root = {
  data : 8,
  left : null,
  right : null
};
let n1 = {
  data : 10,
  left : null,
  right : null
};
let n2 = {
  data : 6,
  left : null,
  right : null
};
  
let BT = new BinaryTree();
BT.root = root;

BT.root.left = n2;
BT.root.right = n1;
console.log(isBST(BT.root));

//7 - 3rd Largest Node

//8 - Balanced BST Algorithm

//9 - Are they the same BSTs?
