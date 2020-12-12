import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //player1='O'
  //player2='X'

  title = 'tic-tac-toe';

  //initialize with an empty string
  winMessage: string='';

  //set this to false to determine player1 turn
  isCross: boolean = true;

  //initialize an array with 9 places and set each item as 'empty'
  itemArray: string[] = new Array(9).fill('empty');

  //inject toastr
  constructor(private toastr: ToastrService) {}

  //method to change empty spaces to an X or O
  clickHandler(itemNumber: number) {

    //check for a winner

    //if there is a winner, display win message
    if(this.winMessage) {
      return this.toastr.success(this.winMessage)
    }

    //when user clicks an 'empty' tic tac toe space...
    if(this.itemArray[itemNumber] === 'empty') {
      //check which player's turn
      //if is Cross is true then fill the space with an X, O if not
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle'

      //next players turn toggle
      this.isCross = !this.isCross;
    } else {
      return this.toastr.info('Space Already Filled')
    }

    //check for winner
    this.checkIsWinner();

  }




  /******************************************************
   * 
   * each if statement checks for a winning condition
   * 
   * if that statement equates to true then a winning message is displayed 
   *      -the winning message grabs the X or O depending on who won 
   * 
   ******************************************************/
  checkIsWinner = () => {

    //horizontal checks
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`;

    //vertical winner checks
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;

    //diagonal winner checks
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    }
  };

  //reset
  reloadGame = () => [
    this.winMessage='',
    this.isCross = false,
    this.itemArray = new Array(9).fill('empty')
  ]



}
