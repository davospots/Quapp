export class Quote {
    // id!: number;
    // name!: string;
    // author!: string;

    showAuthor: boolean;
    constructor(
        
        public yourname: string,
        public author: string,
        public name : string,
        public completeDate: Date){
    this.showAuthor=false;
    }
    }
