export default class Node {
  data: string;
  counter: number;
  left: Node;
  right: Node;

  constructor( data: string ) {
    this.data = data;
    this.counter = 1;
    this.left = null;
    this.right = null;
  }

}
