// https://leetcode.com/problems/implement-queue-using-stacks/description/

// implement queue

// time complexity:
// push: O(1), pop: O(n), peek: O(1), empty: O(1)
// space compexity: O(n)

// var MyQueue = function() {}
class MyQueue {
    constructor() {
        this.q = [];
    }

    // MyQueue.prototype.push = function(x) {}
    push(x) {
        this.q.push(x);
    }

    // MyQueue.prototype.pop = function() {}
    pop() {
        if (this.q.length === 0) {
            return "q is empty";
        } else {
            return this.q.shift();
        }
    }

    // MyQueue.prototype.peek = function() {}
    peek() {
        if (this.q.length === 0) {
            return "q is empty";
        } else {
            return this.q[0];
        }
    }

    // MyQueue.prototype.empty = function() {}
    empty() {
        return this.q.length === 0;
    }
}

// implement queue using stack

// time complexity:
// push: O(1), pop: O(1), peek: O(1), empty: O(1)
// space compexity: O(n)

// var MyQueue = function() {}
class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    // MyQueue.prototype.push = function(x) {}
    push(x) {
        this.inStack.push(x);
    }

    // MyQueue.prototype.pop = function() {}
    pop() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    // MyQueue.prototype.peek = function() {}
    peek() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length - 1];
    }

    // MyQueue.prototype.empty = function() {}
    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}
