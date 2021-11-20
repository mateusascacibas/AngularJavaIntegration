import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [
    {
      "name": "Class"
    },
    {
      "name": "Collection"
    },
    {
      "name": "Conditional"
    },
    {
      "name": "Heritage"
    },
    {
      "name": "Loop"
    },
    {
      "name": "Sequential"
    },
    {
      "name": "Vector and Matrix"
    },
  ];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
