



function Tree(){

  function Node  (key){
    this.key= key
    this.left = null
    this.right = null
  }

  Tree.prototype. isInsertNode = (root,currentNode)=>{
   
    if(root.key>currentNode){
      if(!root.left){
        root.left = currentNode
      }else{
        this.isInsertNode(root.left,currentNode)
      }
    }else{
      if(!root.right){
        root.right = currentNode
      }else{
        this.isInsertNode(root.right,currentNode)
      }
    }
  }

  Tree.prototype.insert = (key)=>{

     
   const currentNode= new Node(key)

   if(!this.root){
     this.root = currentNode
    }else{
this.isInsertNode(this.root,currentNode)
    }

  }

  Tree.prototype.preOrderTranNode  = (node)=>{

   if(!node) return null

   console.log(node.key);
  
   this.preOrderTranNode(node.left)
   this.preOrderTranNode(node.right)

  }
  Tree.prototype.getFirst = ()=>{
    this.preOrderTranNode(this.root)
  }
  
   
}


const NewTree = new Tree()

NewTree.getFirst()



