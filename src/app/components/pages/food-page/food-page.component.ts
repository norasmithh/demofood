import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:any;
  food2!: any ;
  constructor(activatedRoute: ActivatedRoute,foodServices: FoodService,private cartService: CartService, private router: Router){
    activatedRoute.params.subscribe((params) =>{
      debugger
      if(params.id)
      this.food = foodServices.getFoodById(params.id);
      console.log (this.food);
    })
  }
  ngOnInit(): void {
    this.food2 = this.food;
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
