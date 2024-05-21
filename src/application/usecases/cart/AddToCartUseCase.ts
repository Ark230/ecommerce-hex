import { CartService } from "@application/services/CartService";
import { CartItemDTO } from "@application/dto/CartItemDTO";

export class AddToCartUseCase {
  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  async execute(item: CartItemDTO): Promise<void> {
    await this.cartService.addToCart(item);
  }
}
