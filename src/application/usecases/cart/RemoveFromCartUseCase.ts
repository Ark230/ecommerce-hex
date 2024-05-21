import { CartService } from "@application/services/CartService";

export class RemoveFromCartUseCase {
  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  async execute(productId: string): Promise<void> {
    await this.cartService.removeFromCart(productId);
  }
}
