// https://leetcode.com/problems/design-circular-queue/description/

// time complexity:
// enQueue: O(1), deQueue: O(1), front: O(1), rear: O(1), isEmpty: O(1), isFull: O(1)
// space compexity: O(n)

// var MyCircularQueue = function(k) {}
class MyCircularQueue {
    constructor(k) {
        this.q = new Array(k);
        this.head = -1;
        this.tail = -1;
        this.size = k;
    }

    // MyCircularQueue.prototype.enQueue = function(value) {}
    enQueue(value) {
        if (this.isFull()) {
            return false;
        }
        if (this.isEmpty()) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.size;
        this.q[this.tail] = value;
        return true;
    }

    // MyCircularQueue.prototype.deQueue = function() {}
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        if (this.head === this.tail) {
            this.head = -1;
            this.tail = -1;
            return true;
        }
        this.head = (this.head + 1) % this.size;
        return true;
    }

    // MyCircularQueue.prototype.front = function() {}
    front() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.q[this.head];
        }
    }

    // MyCircularQueue.prototype.rear = function() {}
    rear() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.q[this.tail];
        }
    }

    // MyCircularQueue.prototype.isEmpty = function() {}
    isEmpty() {
        return this.head === -1;
    }

    // MyCircularQueue.prototype.isFull = function() {}
    isFull() {
        return (this.tail + 1) % this.size === this.head;
    }
}
