import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'dave', 'jon snow', 'Winter is coming', new Date(2021,3,14)),
    new Quote(2,'waru', 'some guy', 'uliza kiatu', new Date(2021,6,9)),
    
  ];

  addNewQuote(quote:Quote){
    let quoteLength = this.quotes.length;
    
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  
  toggleDetails(index: number){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;

    
  }

  

  deleteQuote(isComplete:any, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
      this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
