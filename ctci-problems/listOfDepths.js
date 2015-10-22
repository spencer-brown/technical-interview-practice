/**
 * Given a binary tree, design an algorithm which creates a linked list of all the nodes
 * at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
 */

/*
 * Brute-force algo:
 * - Iterate through tree, marking each node with its level
 * - For each level, iterate through tree + add nodes
 * - Time complexity: O(n^2)
 *
 * Better algo:
 * - Create array of linked lists
 * - Pre-order traversal of tree, keeping track of level while traversing
 * - When encountering a node:
 *   -> return if null
 *   -> if LL exists for that level, add node to LL (if order doesn't matter, just prepend for constant-time add + update root reference in array)
 *   -> if LL does not exist, create node and set val in array
 */

function listOfDepths(root) {
    if (root === null) {
        return null;
    }

    var list = [];

    traverse(list, root, 0);

    return list;
}

function traverse(list, node, level) {
    if (node === null || typeof node === 'undefined') {
        return;
    }

    console.log('value: ', node.value, 'level: ', level);

    var newNode = {
        data: node,
        next: (typeof list[level] === undefined ? null : list[level])
    };

    list[level] = newNode;
    traverse(list, node.leftChild, level + 1);
    traverse(list, node.rightChild, level + 1);
}

var testRoot = {
    value: 1,
    leftChild: {
        value: 2,
        leftChild: {
            value: 4,
        },
        rightChild: {
            value: 5,
            leftChild: {
                value: 8
            }
        }
    },
    rightChild: {
        value: 3,
        leftChild: {
            value: 6,
            rightChild: {
                value: 9
            }
        },
        rightChild: {
            value: 7
        }
    }
};

var testList = listOfDepths(testRoot);
console.log(testList.length);
console.log(testList[0]);
console.log(testList[1]);
console.log(testList[2]);
console.log(testList[3]);
