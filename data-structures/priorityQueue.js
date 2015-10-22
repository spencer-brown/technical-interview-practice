function MyPriorityQueue() {
    
    var priorityQueue = [];
    var size = 0;

    this.insertWithPriority = function(element, priority) {
        
        var elementIndex = size;
        
        // insert element into max heap
        priorityQueue[elementIndex] = {
            element: element,
            priority: priority
        };
        
        size++;

        // 'swim' the element up so that the heap maintains max-heapness
        swimUp(elementIndex);
    };

    function swimUp(index) {

        // if node is root, can't swim up
        if (index === 0) {
            return;
        }

        var parentIndex = getParentIndex(index);

        if (priorityQueue[index].priority > priorityQueue[parentIndex].priority) {
            swapWithParent(index);

            // swimUp again
            swimUp(parentIndex);
        }
    }

    function getParentIndex(childIndex) {
        return Math.round(childIndex / 2) - 1;
    }

    function swapWithParent(childIndex) {
        var parentIndex = getParentIndex(childIndex);
        var temp = priorityQueue[parentIndex];
        priorityQueue[parentIndex] = priorityQueue[childIndex];
        priorityQueue[childIndex] = temp;
    }

    this.pullHighestPriorityElement = function(element) {
    };

    this.peek = function() {
    };

    this.printQueue = function() {
        console.log(priorityQueue);
    };
}

var pq = new MyPriorityQueue();
pq.insertWithPriority({name: 'Spencer'}, 10);
pq.insertWithPriority({name: 'Steven'}, 1);
pq.insertWithPriority({name: 'Sri'}, 5);
pq.insertWithPriority({name: 'Sam'}, 4);
pq.insertWithPriority({name: 'Sally'}, 8);
pq.insertWithPriority({name: 'Sue'}, 9);
pq.printQueue();
