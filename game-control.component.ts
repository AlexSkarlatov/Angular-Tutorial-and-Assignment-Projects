import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {

//@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() interval = new EventEmitter<{timeElapsed: number}>();
  //private lastNumber = 0;
  myInterval;
  private second: number;
  private time = 0;
  //define function to emit here
  // onIntervalEmit(){
  //   this.interval.emit({
  //     timeElapsed: 1
  //   });
  // }
  ngOnDestroy(){
    //add stop timer function here
  }
  findCount(){
    this.time = this.time + 1;
    return this.time;
  }
  startGame(){
    //timer = 0;
      //begin the timer
      this.myInterval = setInterval(() => {
        //x = this.findCount()
        //emit
        //console.log('x');
        this.interval.emit({timeElapsed: this.time++});
        //this.interval.emit({timeElapsed: x});
      }, 1000);

      //emit every second
      //this.interval.emit({timeElapsed: 1});
  }
  onPause(){
    this.stopTimer();
  }
  stopTimer(){
    if(this.time > 0 || this.myInterval){
      this.time = 0;
      clearInterval(this.myInterval);
      // clearInterval(this.interval);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
