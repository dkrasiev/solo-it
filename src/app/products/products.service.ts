import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({ providedIn: "root" })
export class ProductsService {
  products: Product[] = [
    {
      name: "Bitrix",
      offers: [
        { name: "Бесплатный", price: 0 },
        { name: "Базовый", price: 2490 },
        { name: "Стандартный", price: 5990 },
        { name: "Профессиональный", price: 11990 },
      ],
    },
    {
      name: "Test",
      offers: [
        { name: "test1", price: 1000 },
        { name: "test2", price: 2000 },
        { name: "test3", price: 3000 },
        { name: "test4", price: 4000 },
      ],
    },
  ];
}
