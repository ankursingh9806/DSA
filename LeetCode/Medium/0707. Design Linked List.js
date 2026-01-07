// https://leetcode.com/problems/design-linked-list/description/

// singly linked list
// doubly linked list (commented)

// time complexity:
// get: O(n), addAtHead: O(1), addAtTail: O(1), addAtIndex: O(n), deleteAtIndex: O(n)
// space compexity: O(n)

// function ListNode(val) {}
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        // this.prev = null;
    }
}

// var MyLinkedList = function() {}
class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // MyLinkedList.prototype.get = function(index) {}
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    // MyLinkedList.prototype.addAtHead = function(val) {}
    addAtHead(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            // this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    // MyLinkedList.prototype.addAtTail = function(val) {}
    addAtTail(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            // newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    // MyLinkedList.prototype.addAtIndex = function(index, val) {}
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) {
            return;
        }
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.length) {
            this.addAtTail(val);
            return;
        }
        let newNode = new ListNode(val);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        // newNode.prev = curr;
        // curr.next.prev = newNode;
        curr.next = newNode;
        this.length++;
    }

    // MyLinkedList.prototype.deleteAtIndex = function(index) {}
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.length--;

            if (this.length === 0) {
                this.tail = null;
            }
            return;
        }
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
        if (index === this.length - 1) {
            this.tail = curr;
        }
        this.length--;

        // if (index < 0 || index >= this.length) {
        //     return;
        // }
        // if (index === 0) {
        //     this.head = this.head.next;
        //     if (this.head) {
        //         this.head.prev = null;
        //     } else {
        //         this.tail = null;
        //     }
        //     this.length--;
        //     return;
        // }
        // let curr = this.head;
        // for (let i = 0; i < index - 1; i++) {
        //     curr = curr.next;
        // }
        // curr.next = curr.next.next;
        // if (curr.next) {
        //     curr.next.prev = curr;
        // } else {
        //     this.tail = curr;
        // }
        // this.length--;
    }
}
