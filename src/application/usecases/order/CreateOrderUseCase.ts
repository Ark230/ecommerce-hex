import { OrderService } from "@application/services/OrderService";
import { OrderDTO } from "@application/dto/OrderDTO";

export class CreateOrderUseCase {
  private orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  async execute(order: OrderDTO): Promise<void> {
    await this.orderService.createOrder(order);
  }
}
