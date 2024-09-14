class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

export default class linkedList {
  constructor() {
    this.head = null;
  }

  //size of Linked List
  sizeLL() {
    let size = 0;
    if (this.head === null) {
      console.log("size: " + size);
    } else {
      let current = this.head;
      while (current) {
        size++;
        current = current.next;
      }
    }
    return size;
  }

  //insertFirst method
  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  //insertLast
  insertLast(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }

  headLL() {
    if (head !== null) {
      console.log("The value of the head is " + this.head.data);
      return this.head.data;
    }
    console.log("The Linked List is empty");
    return null;
  }

  //returns tail value in linked List
  tailLL() {
    if (this.head === null) {
      console.log("Linked List is empty");
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      console.log("The value of tail of Linked List is " + current.data);
    }
  }

  //returns the value at a certain index
  atIndex(index) {
    const size = this.sizeLL();
    if (size < index) {
      console.log("The Index is bigger than the size of the Linked List");
    } else {
      let count = 1;
      let current = this.head;
      while (count !== index) {
        count++;
        current = current.next;
      }
      console.log("The value at the " + index + " index is " + current.data);
    }
  }

  //   does the value exist in linked list or not
  contains(value) {
    if (this.head !== null) {
      let current = this.head;
      while (current) {
        if (current.data === value) {
          console.log("False ,the LL contains the value");
          return true;
        }
        current = current.next;
      }
    }
    console.log("True ,the LL doesn't contain the value");
    return false;
  }

  //find the index of the value and null if value doesn't exist
  find(value) {
    if (this.head !== null) {
      let current = this.head;
      let index = 1;
      while (current !== null) {
        if (current.data === value) {
          console.log("The value is found at index " + index);
          return index;
        }
        index++;
        current = current.next;
      }
    }
  }

  insertAt(value, index) {
    if (index === 1) {
      const node = new Node(value, this.head);
      this.head = node;
      return;
    }

    let current = this.head;
    let count = 1;

    while (count < index - 1 && current !== null) {
      current = current.next;
      count++;
    }

    if (current === null) {
      console.log("The given index is out of bounds");
      return;
    }
    current.next = new Node(value, current.next);
  }

  //remove element at certain index
  removeAt(index) {
    if (index < 1) {
      console.log("The index is out of bounds");
      return;
    }
    if (index === 1) {
      if (this.head !== null) {
        this.head = this.head.next;
      } else {
        console.log("The Linked List is empty");
      }
      return;
    }
    let count = 1;
    let current = this.head;
    while (count < index - 1 && current !== null) {
      current = current.next;
      count++;
    }
    if (current === null) {
      console.log(" The index given by user is out of bounds");
      return;
    }
    current.next = current.next.next;
  }

  //remove Last element from Linked List
  popLL() {
    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  //   Print the Linked List
  printLL() {
    if (this.head === null) return null;

    let str = "";
    let current = this.head;
    while (current) {
      str += `${current.data}->`;
      if (current.next === null) {
        str += `null`;
      }
      current = current.next;
    }
    console.log(str);
    return str;
  }
}
