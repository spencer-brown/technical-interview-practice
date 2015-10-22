function minimalTree(arr) {
    var rootIndex;

    if (arr.length === 0) {
        return null;
    } else {
        rootIndex = Math.floor(arr.length / 2);
    }

    var root = {};
    root.key = arr[rootIndex];
    root.leftChild = minimalTree(arr.slice(0, rootIndex));
    root.rightChild = minimalTree(arr.slice(rootIndex + 1, arr.length + 1));

    return root;
}

var arr = [1, 3, 7, 8, 9, 10];
console.log(minimalTree(arr));
