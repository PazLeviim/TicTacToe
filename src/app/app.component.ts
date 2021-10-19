import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TicTacToe';
  num:number=0
  numplayer():number{
    if (this.num%2==0)
    this.num=1
    else
    this.num=2
    return this.num
  }
  winner:boolean=false
  turn:string=`Player ${this.numplayer()} turn`
  selectbox(n:number):void{
    const mybox=document.getElementsByClassName("box")
    if(mybox[n-1].innerHTML.length==0&&!this.winner){
    if(this.num%2!=0)
    mybox[n-1].innerHTML="X"
    else
    mybox[n-1].innerHTML="O"
    this.turn=`Player ${this.numplayer()} turn`
    }
  }
  winning():void{
    const mybox=document.getElementsByClassName("box")
   var checkwin:boolean=false
    for(let i=0;i<mybox.length;i++)
    if(mybox[i].innerHTML!="")
    checkwin=true
    else{
      checkwin=false
      break
    }
    if(mybox[0].innerHTML=="X"&&mybox[1].innerHTML=="X"&&mybox[2].innerHTML=="X"){
      this.turn="Player 1 Win"
      this.winner=true
    }
    else if(mybox[3].innerHTML=="X"&&mybox[4].innerHTML=="X"&&mybox[5].innerHTML=="X")
    {
      this.turn="Player 1 Win"
      this.winner=true
    }
    else if(mybox[6].innerHTML=="X"&&mybox[7].innerHTML=="X"&&mybox[8].innerHTML=="X")
    {
      this.turn="Player 1 Win"
      this.winner=true
    }
    else if(mybox[0].innerHTML=="X"&&mybox[3].innerHTML=="X"&&mybox[6].innerHTML=="X")
    {
      this.turn="Player 1 Win"
      this.winner=true
    }
    else if(mybox[1].innerHTML=="X"&&mybox[4].innerHTML=="X"&&mybox[7].innerHTML=="X")
    {
      this.turn="Player 1 Win"
      this.winner=true
    }
    else if(mybox[2].innerHTML=="X"&&mybox[5].innerHTML=="X"&&mybox[8].innerHTML=="X")
    {
      this.turn="Player 1 Win"
      this.winner=true
    }
    else if(mybox[0].innerHTML=="X"&&mybox[4].innerHTML=="X"&&mybox[8].innerHTML=="X")
    {
      this.turn="Player 1 Win"
      this.winner=true
    }
    else if(mybox[2].innerHTML=="X"&&mybox[4].innerHTML=="X"&&mybox[6].innerHTML=="X")
    {
      this.turn="Player 1 Win"
      this.winner=true
    }//X
    if(mybox[0].innerHTML=="O"&&mybox[1].innerHTML=="O"&&mybox[2].innerHTML=="O"){
      this.turn="Player 2 Win"
      this.winner=true
    }
    else if(mybox[3].innerHTML=="O"&&mybox[4].innerHTML=="O"&&mybox[5].innerHTML=="O")
    {
      this.turn="Player 2 Win"
      this.winner=true
    }
    else if(mybox[6].innerHTML=="O"&&mybox[7].innerHTML=="O"&&mybox[8].innerHTML=="O")
    {
      this.turn="Player 2 Win"
      this.winner=true
    }
    else if(mybox[0].innerHTML=="O"&&mybox[3].innerHTML=="O"&&mybox[6].innerHTML=="O")
    {
      this.turn="Player 2 Win"
      this.winner=true
    }
    else if(mybox[1].innerHTML=="O"&&mybox[4].innerHTML=="O"&&mybox[7].innerHTML=="O")
    {
      this.turn="Player 2 Win"
      this.winner=true
    }
    else if(mybox[2].innerHTML=="O"&&mybox[5].innerHTML=="O"&&mybox[8].innerHTML=="O")
    {
      this.turn="Player 2 Win"
      this.winner=true
    }
    else if(mybox[0].innerHTML=="O"&&mybox[4].innerHTML=="O"&&mybox[8].innerHTML=="O")
    {
      this.turn="Player 2 Win"
      this.winner=true
    }
    else if(mybox[2].innerHTML=="O"&&mybox[4].innerHTML=="O"&&mybox[6].innerHTML=="O")
    {
      this.turn="Player 2 Win"
      this.winner=true
    }//O
    else if(checkwin)
    this.turn="Draw"


  }
  restart():void{
    this.num=0
    this.turn=`Player ${this.numplayer()} turn`
    const mybox=document.getElementsByClassName("box")
    for(let i=0;i<mybox.length;i++)
    mybox[i].innerHTML=""
    this.winner=false
  }
}

