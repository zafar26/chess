import React from 'react'
import Chessboard from 'chessboardjsx'
import calcWidth from 'chessboardjsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      boardStyle: {},
      darkSquareStyle: { backgroundColor: 'rgb(181, 136, 99)' },
      draggable: false,
      dropSquareStyle: { boxShadow: 'inset 0 0 1px 4px yellow' },
      id: '0',
      lightSquareStyle: { backgroundColor: 'rgb(240, 217, 181)' },
      orientation: 'white',
      pieces: 'pieces',
      position: '',
      showNotation: false,
      sparePieces: false,
      squareStyles: {},
      transitionDuration: 300,
      undo: false,
      width: calcWidth,
      
      }
    }
      
    allowDrag = (allowdrag) =>  {
     // console.log(allowdrag)
    }
    calcWidth = (calcwidth) => {
      //console.log(calcwidth)
    }
    getPosition = (getposition) => {
      //console.log(getposition)
    }
    onDragOverSquare = (dragoversquare) => {
      //console.log(dragoversquare)
    }
    onDrop = (drop) => {
      //console.log(drop)
    }
    onMouseOutSquare = (mouseoutsquare) => {
      //console.log(mouseoutsquare)
    }
    onMouseOverSquare = (mouseoversquare) => {
      //console.log(mouseoversquare)
    }
    onPieceClick = (piececlick) => {
      //console.log(piececlick)
    }
    onSquareClick = (squareclick) => {
      //console.log(squareclick)
    }
    onSquareRightClick = (squarerightclick) => {
      //console.log(squarerightclick)
    }
    roughSquare = (roughspace) => {
      //console.log(roughspace)
    }

  render(){
  return(
    <Chessboard position="start"
    //allowDrag = {this.allowDrag}
    //calcWidth = {this.calcWidth}
    getPosition = {this.getPosition}   
    //onDragOverSquare = {this.onDragOverSquare}
    //onDrop = {this.onDrop}
    //onMouseOutSquare = {this.onMouseOutSquare}
    //onMouseOverSquare = {this.onMouseOverSquare}
    //onPieceClick = {this.onPieceClick}
    //onSquareClick = {this.onSquareClick}
    //onSquareRightClick = {this.onSquareRightClick}
    //roughSquare = {this.roughSquare}
    />
    )
  }
}
export default App