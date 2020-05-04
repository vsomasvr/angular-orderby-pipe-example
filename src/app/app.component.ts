import { Component } from '@angular/core';
import { Laptop, ILaptop } from './models/laptop.model';
import { Config } from './models/laptop.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  laptops: ILaptop[] = [];
  laptopsWithConfig: ILaptop[] = [];
  laptopModelNames: string[] = [];
  constructor(){
    this.laptops.push(new Laptop(1, "Think Pad", "Lenovo", 2017, new Config("Intel core i7", 32)));
    this.laptops.push(new Laptop(2, "Macbook Pro", "Apple", 2019, new Config("Intel core i5", 16)));
    this.laptops.push(new Laptop(3, "Galago Pro", "System76", 2020, new Config("Intel core i7", 64)));
    this.laptops.push(new Laptop(4, "XPS", "DELL", 2020, new Config("Intel core i5", 8)));
    this.laptopsWithConfig = Object.assign([], this.laptops);
    this.laptopModelNames = this.laptops.map((laptop) => laptop.model);
  }

}
