import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2020,3,14)),
    new Quote(2, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2021,11,9)),
    new Quote(3, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2021,12,12)),
  ];
  
  toggleDetails(index: number){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;

    
  }

  completeQuote(isComplete:any, index:number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
