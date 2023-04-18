import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  http: any;
  getFoodById(id: any) {
    return this.getAll().filter(food => food.id.includes(id))
  }

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  //üsteki etiket filter
  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }


}
