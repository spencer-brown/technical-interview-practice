/**
 * Design an algorithm and write code to find the first common ancestor
 * of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
 * necessarily a binary search tree.
 */

function firstCommonAncestor(root, p, q) {
    if (typeof root === 'undefined') {
        return;
    }

    var leftCount = firstCommonAncestor(root.leftChild, p, q);
    var rightCount = firstCommonAncestor(root.rightChild, p, q);
    
    if (leftCount + rightCount === 2) {
        console.log(root);
        return 0; // this could be improved
    } else {
        var found = (root === p || root === q ? 1 : 0);
        return leftCount + rightCount + found;
    }
}
