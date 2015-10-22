/**
 * Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
 * binary search tree. You may asssume that each node has a link to its parent.
 */

function findSuccessor(node) {
    if (typeof node === 'undefined') {
        return;
    }

    var successor;

    if (!node.rightChild) {
        successor = node.parent;
        while (successor.data < node.data) {
            successor = successor.parent;
        }
    } else {
        successor = node.rightChild;
        while (successor.leftChild) {
            successor = successor.leftChild;
        }
    }

    return successor;
}
