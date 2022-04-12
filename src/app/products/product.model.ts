import { Offer } from "./offer.model";

export interface Product {
  name: string;
  offers: Offer[];
}
