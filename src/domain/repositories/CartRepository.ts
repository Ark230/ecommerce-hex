import { CartItemDTO } from "@application/dto/CartItemDTO";

export interface CartRepository {
  fetchCartItems: () => Promise<CartItemDTO[]>;
  addCartItem: (item: CartItemDTO) => Promise<void>;
  removeCartItem: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}
