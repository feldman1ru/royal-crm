import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnInit {
  @Input() categories: Array<Category> = [];
  @Input() array: any = [];
  @Input() placeholderText: string = ' Click the Navigation button to choose a category and then enter the item you are looking for here';
  @Output() arrayFiltered = new EventEmitter();

  category: Category = {name: '', value: ''};
  constructor() { }

  onSearch(e: any){

    const term = e.target.value;
    let newArray = [...this.array];
    const filtered = newArray.filter((item:any)=>item[this.category.value].toLowerCase().trim().includes(term.toLowerCase().trim()));
    this.arrayFiltered.emit(filtered);
  }

  onCategoryChange(e:any){
    const CategoryChanged = this.categories.find((item: Category)=> item.value === e.target.value);
    if(CategoryChanged) this.category = CategoryChanged;
  }

  ngOnInit(): void {
    this.category ={
      name: this.categories[0].name,
      value: this.categories[0].value,
    }
  }

}
