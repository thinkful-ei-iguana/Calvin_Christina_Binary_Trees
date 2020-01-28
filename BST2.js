const BinarySearchTree = require("./BinarySearchTree");

// Drill #3

const drill = () => {
  let tree = new BinarySearchTree();

  tree.insert(3, 3);
  tree.insert(1, 1);
  tree.insert(4, 4);
  tree.insert(6, 6);
  tree.insert(9, 9);
  tree.insert(2, 2);
  tree.insert(5, 5);
  tree.insert(7, 7);
  // console.log(tree.height());
  return tree;
};

// console.log(drill(tree));

// Drill #4

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

console.log(height(drill()));

// Drill #5
// Line 68

// Drill #6

const isBST = tree => {
  let root = tree.value;

  if (tree.value === null) {
    return 0;
  }

  if (tree.left) {
    if (tree.left.value < root) {
      isBST(tree.left);
    } else {
      return false;
    }
  }

  if (tree.right) {
    if (tree.right.value > root) {
      isBST(tree.right);
    } else {
      return false;
    }
  }
  return true;
};

console.log(isBST(drill()));

// Drill #7

const threeLargest = (tree, state) => {
  if (tree.right) threeLargest(tree.right, state);
  --state.n;
  if (state.n === 0) state.result = tree.key;
  if (state.result) return;
  if (tree.left) threeLargest(tree.left, state);
};

const state = { n: 3 };
console.log(threeLargest(drill(), state), "result:", state.result);

// Drill #8

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

console.log(isBalanced(drill()));

// Drill #9 (O)n

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
