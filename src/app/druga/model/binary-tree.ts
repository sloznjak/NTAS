import Node from './node';

export class BinaryTree {
  root: Node = null;
  dataToDisplay: string[] = [];

  insert ( data: string ) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode (node, newNode) {
    if (newNode.data === node.data) {
      node.counter++;
    } else if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data + ' - ' + node.counter);
      this.dataToDisplay.push(node.data + ' - ' + node.counter);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data + ' - ' + node.counter);
      this.dataToDisplay.push(node.data + ' - ' + node.counter);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data + ' - ' + node.counter);
      this.dataToDisplay.push(node.data + ' - ' + node.counter);
    }
  }
}
