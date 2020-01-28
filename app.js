const BinarySearchTree = require("./BinarySearchTree");

/* SEE GIST
https://gist.github.com/C-Rosehart/44933568024d3a3516d803fa91206b06
https://gist.github.com/cmchapman75/be2a7a3de4af72bf3771a6c771f4888b
*/

//2 - Remove the Root

/* SEE GIST
https://gist.github.com/C-Rosehart/44933568024d3a3516d803fa91206b06
https://gist.github.com/cmchapman75/be2a7a3de4af72bf3771a6c771f4888b
*/

// const drill = () => {
//   let tree = new BinarySearchTree();
// };
//3 - Create the BST class

function numberTree() {
  let tree = new BinarySearchTree();
  tree.insert(3, 3);
  tree.insert(1, 1);
  tree.insert(4, 4);
  tree.insert(6, 6);
  tree.insert(9, 9);
  tree.insert(2, 2);
  tree.insert(5, 5);
  tree.insert(7, 7);

  return tree;
}

function letterTree() {
  // let tree = new BinarySearchTree();

  tree.insert("E", "E");
  tree.insert("A", "A");
  tree.insert("S", "S");
  tree.insert("Y", "Y");
  tree.insert("Q", "Q");
  tree.insert("U", "U");
  tree.insert("E", "E");
  tree.insert("S", "S");
  tree.insert("T", "T");
  tree.insert("I", "I");
  tree.insert("O", "O");
  tree.insert("N", "N");

  tree.remove("E");
  // console.log('@Y: ', tree.find('Y'));
  return tree;
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

  return "The height of the tree is: " + heightCount;
}

console.log(height(numberTree()));

//6 - Is it a BST?
function BinaryTree() {
  this.root = null;
}

let last_logged;

function isBST(root) {
  if (root === null) {
    // base case
    return true;
  }

  if (!isBST(root.left)) {
    return false;
  }

  if (last_logged !== null && root.data <= last_logged) {
    return false;
  }

  console.log("Current Node : ", root.data);
  last_logged = root.data;

  if (!isBST(root.right)) {
    return false;
  }

  return true;
}

// Create a Binary Tree as a sample input
let root = {
  data: 8,
  left: null,
  right: null
};
let n1 = {
  data: 10,
  left: null,
  right: null
};
let n2 = {
  data: 6,
  left: null,
  right: null
};

let BT = new BinaryTree();
BT.root = root;

BT.root.left = n2;
BT.root.right = n1;
console.log(isBST(BT.root));

//7 - 3rd Largest Node

const threeLargest = (tree, state) => {
  // let nthTree = new BinarySearchTree();
  if (tree.right) threeLargest(tree.right, state);
  --state.n;
  if (state.n === 0) state.result = tree.key;
  if (state.result) return;
  if (tree.left) threeLargest(tree.left, state);
};

const state = { n: 3 };
console.log(BinarySearchTree);
console.log(threeLargest(numberTree(), state), "result:", state.result);

//8 - Balanced BST Algorithm

const isBalanced = tree => {
  if (tree.height() < 1) {
    return false;
  }

  let leftHeight = tree.height(tree.left);
  let rightHeight = tree.height(tree.right);

  if (leftHeight - rightHeight > 1) {
    return false;
  } else {
    return true;
  }
};

console.log(isBalanced(numberTree()));

//9 - Are they the same BSTs? (O)n

const matchingBST = (tree1, tree2) => {
  if (tree1.length !== tree2.length) {
    return false;
  }

  let sorted1 = tree1.sort();
  let sorted2 = tree2.sort();

  if (JSON.stringify(sorted1) === JSON.stringify(sorted2)) {
    return true;
  }
  return false;
};

const tree1 = [3, 5, 4, 6, 1, 0, 2];
const tree2 = [3, 1, 5, 2, 4, 6, 0];

console.log(matchingBST(tree1, tree2));
