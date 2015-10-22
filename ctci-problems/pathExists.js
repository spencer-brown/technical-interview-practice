function pathExists(startNode, endNode) {
    // initialize queue
    var queue = [startNode];

    while(queue.length !== 0) {
        processQueue(endNode.key, queue);
    }
}

function processQueue(searchVal, queue) {
    // get first val from queue
    // TODO: Actually remove element from array
    var node = queue.splice(0, 1)[0];

    for (i = 0; i < node.children.length; i++) {
        if (!node.children[i].checked) {
            if (node.children[i].key == searchVal) {
                return true;
            }

            node.children[i].checked = true;
            queue.push(node.children[i]);
        }
    }
}
