import { CartItemDTO } from "./CartItemDTO";
export interface OrderDTO {
  id: string;
  customerId: string;
  items: CartItemDTO[];
  quantity: number;
  totalPrice: number;
  orderDate: Date;
}
