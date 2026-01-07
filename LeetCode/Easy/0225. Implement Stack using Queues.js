// https://leetcode.com/problems/implement-stack-using-queues/description/

// time complexity:
// push: O(1), pop: O(1), top: O(1), empty: O(1)
// space compexity: O(n)

// var MyStack = function() {}
class MyStack {
    constructor() {
        this.st = [];
    }

    // MyStack.prototype.push = function(x) {}
    push(x) {
        this.st.push(x);
    }

    // MyStack.prototype.pop = function() {}
    pop() {
        if (this.st.length === 0) {
            return "st is empty";
        } else {
            return this.st.pop();
        }
    }

    // MyStack.prototype.top = function() {}
    top() {
        if (this.st.length === 0) {
            return "st is empty";
        } else {
            return this.st[this.st.length - 1];
        }
    }

    // MyStack.prototype.empty = function() {}
    empty() {
        return this.st.length === 0;
    }
}
