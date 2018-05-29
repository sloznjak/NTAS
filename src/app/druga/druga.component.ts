import { Component, OnInit } from '@angular/core';
import { BinaryTree } from './model/binary-tree';

@Component({
  selector: 'app-druga',
  templateUrl: './druga.component.html',
  styleUrls: ['./druga.component.css']
})
export class DrugaComponent implements OnInit {

  binaryTree: BinaryTree = new BinaryTree();
  input = '';
  addedData: string[] = [];
  orderedData: string[] = [];
  orderType = '';

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.binaryTree.insert(this.input);
    this.addedData.push(this.input);

    this.input = '';
    console.log(this.binaryTree);
    console.log(this.addedData);
  }

  inOrder() {
    if (this.binaryTree.root !== null) {
      this.orderType = 'Inorder: ';
      this.binaryTree.inorder(this.binaryTree.root);
      this.orderedData = this.binaryTree.dataToDisplay;
      this.binaryTree.dataToDisplay = [];
    }
  }

  preOrder() {
    if (this.binaryTree.root !== null) {
      this.orderType = 'Preorder: ';
      this.binaryTree.preorder(this.binaryTree.root);
      this.orderedData = this.binaryTree.dataToDisplay;
      this.binaryTree.dataToDisplay = [];
    }
  }

  postOrder() {
    if (this.binaryTree.root !== null) {
      this.orderType = 'Postorder: ';
      this.binaryTree.postorder(this.binaryTree.root);
      this.orderedData = this.binaryTree.dataToDisplay;
      this.binaryTree.dataToDisplay = [];
    }
  }

  reset() {
    this.binaryTree = new BinaryTree();
    this.addedData = [];
    this.orderedData = [];
    this.orderType = '';
    console.log(this.binaryTree);
  }
}
