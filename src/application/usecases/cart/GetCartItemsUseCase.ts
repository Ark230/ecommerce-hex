import { CartService } from "@application/services/CartService";
import { CartItemDTO } from "@application/dto/CartItemDTO";

export class GetCartItemsUseCase {
  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  async execute(): Promise<CartItemDTO[]> {
    return await this.cartService.getCartItems();
  }
}
