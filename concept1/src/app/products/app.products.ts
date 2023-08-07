import {Component} from '@angular/core'


@Component({
    selector:'app-products',
    templateUrl: './app.products.html',
    styleUrls: ['./app.products.css']
})
export class ProductsComponent{

    products = [
        {id:1, name: 'Minimalists Analog Watch', price: '399', color: 'Black', available: 'Available', image: '/assets/products/analogwatch.jpg'},
        {id:2, name: 'BOAT Headphone', price: '249', color: 'Red', available: 'Not Available', image: '/assets/products/headphones.jpg'},
        {id:3, name: 'SONY Writing Tablet', price: '299', color: 'White', available: 'Available', image: '/assets/products/writingtablet.jpg'},
        {id:4, name: 'Ear Buds', price: '199', color: 'Purple', available: 'Available', image: '/assets/products/earbuds.jpg'},
        {id:5, name: 'LG Fully Automatic Washing Machine', price: '149', color: 'Lavender', available: 'Not Available', image: '/assets/products/washingmachine.jpg'},
        {id:6, name: 'Lighter', price: '149', color: 'Blue', available: 'Available', image: '/assets/products/lighter.jpg'},
        {id:7, name: 'Camera', price: '499', color: 'Light Pink', available: 'Not Available', image: '/assets/products/camera.jpg'},
        {id:8, name: 'Gaming Keyboard', price: '999', color: 'Dark Grey', available: 'Available', image: '/assets/products/gamingKeyboard.jpg'},
        {id:9, name: 'Induction', price: '150', color: 'Solid Black', available: 'Available', image: '/assets/products/induction.jpg'},
        {id:10, name: 'Shoes', price: '199', color: 'Yellow', available: 'Not Available', image: '/assets/products/shoes.jpg'},
        {id:11, name: 'Bag', price: '299', color: 'Green', available: 'Available', image: '/assets/products/bag.jpg'}
      ]

}