import { Quote } from './../quote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  yourname!: string;
  author!: string;
  name! : string;
  

  newQuote = new Quote('','','',new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  
  

  submitQuote(){
    this.newQuote = new Quote(this.yourname,this.author,this.name,new Date());
    this.addQuote.emit(this.newQuote);
    
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
