import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [
    {
      "name": "Class",
      "exercise": ["1","2","3"],     

    },
    {
      "name": "Collection",
      "exercise": ["1","2","3"],    
    },
    {
      "name": "Conditional",
      "exercise": ["1","2","3"],    
    },
    {
      "name": "Heritage",
      "exercise": ["1","2","3"],    
    },
    {
      "name": "Loop",
      "exercise": ["1","2","3"],    
    },
    {
      "name": "Sequential",
      "exercise": ["1","2","3"],    
    },
    {
      "name": "Vector and Matrix",
      "exercise": ["1","2","3"],    
    },
  ];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
