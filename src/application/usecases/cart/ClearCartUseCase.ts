import { CartService } from "@application/services/CartService";

export class ClearCartUseCase {
  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  async execute(): Promise<void> {
    await this.cartService.clearCart();
  }
}
