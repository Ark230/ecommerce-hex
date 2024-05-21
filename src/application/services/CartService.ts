import { CartItemDTO } from "@application/dto/CartItemDTO";
import { CartRepository } from "@domain/repositories/CartRepository";

export class CartService {
  private repository: CartRepository;

  constructor(repository: CartRepository) {
    this.repository = repository;
  }

  async getCartItems(): Promise<CartItemDTO[]> {
    return await this.repository.fetchCartItems();
  }

  async addToCart(item: CartItemDTO): Promise<void> {
    await this.repository.addCartItem(item);
  }

  async removeFromCart(productId: string): Promise<void> {
    await this.repository.removeCartItem(productId);
  }

  async clearCart(): Promise<void> {
    await this.repository.clearCart();
  }
}
