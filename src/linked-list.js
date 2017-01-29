const Node = require('./node');

class LinkedList {
	constructor() {
		this.length = 0;
	}

	append(data) {
		if (this.length == 0) {
			var newNode = new Node(data, null, null);
			this._head = newNode;
			this._tail = newNode;
			this.length = 1
		} else {
			var newNode = new Node(data, this._tail, null);
			this._tail.next = newNode;
			this._tail = newNode;
			this.length++;

		}
		return this;
	}

	head() {
		if (this._head) {
			return this._head.data;
		}
		return null;
	}

	tail() {
		if (this._tail) {
			return this._tail.data;
		}
		return null;

	}

	at(index) {
		var node = this._head;
		for (var i = 0; i < index; i++) {
			node = node.next;
		}
		return node.data;
	}

	insertAt(index, data) {
		if (index == 0) {
			var newNode = new Node(data, null, this._head);
			if (this._head == null) {
				this._tail = newNode;
			} else {
				this._head.prev = newNode;
			}
			this._head = newNode;
		} else if (index == this.length) {
			var newNode = new Node(data, this._tail, null);
			this._tail.next = newNode;
			this._tail = newNode;
		} else {
			var node = this._head;
			for (var i = 0; i < index; i++) {
				node = node.next;
			}
			var newNode = new Node(data, node.prev, node);
			node.prev.next = newNode;
			node.prev = newNode;
		}
		return this;
	}

	isEmpty() {
		return !this.length;
	}

	clear() {
		this.length = 0;
		this._head = null;
		this._tail = null;
		return this;
	}

	deleteAt(index) {
		var node = this._head;
		for (var i = 0; i < index; i++) {
			node = node.next;
		}
		var nodeNext = node.next;
		var nodePrev = node.prev;
		nodePrev && (nodePrev.next = nodeNext);
		nodeNext && (nodeNext.prev = nodePrev);
		if (index == 0) {
			this._head = node.next;
		}
		if (index == this.length - 1) {
			this._tail = node.prev;
		}
		return this;

	}

	reverse() {
		var head = this._head;
		var tail = this._tail;
		for (var i = 0; i < Math.floor(this.length / 2); i++) {
			var numHead = head.data;
			var numTail = tail.data;
			head.data = numTail;
			tail.data = numHead;
			head = head.next;
			tail = tail.prev;
		}
		return this;
	}

	indexOf(data) {
		var node = this._head;
		for (var i = 0; i < this.length; i++) {
			if (node.data == data) {
				return i;
			}
			node = node.next;
		}
		return -1;
	}

}

module.exports = LinkedList;
