import { Quote } from './../quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  
  }

  likes : number = 0;
  dislikes: number = 0;
  likeBtnClick() {
    this.likes++;
  }
  dislikeBtnClick(){
    this.dislikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
