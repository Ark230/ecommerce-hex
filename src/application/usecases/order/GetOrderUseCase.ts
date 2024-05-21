import { OrderService } from "@application/services/OrderService";
import { OrderDTO } from "@application/dto/OrderDTO";

export class GetOrderUseCase {
  private orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  async execute(): Promise<OrderDTO[]> {
    return await this.orderService.getOrders();
  }
}
