import { OrderDTO } from "@application/dto/OrderDTO";
import { OrderRepository } from "@domain/repositories/OrderRepository";

export class OrderService {
  private repository: OrderRepository;

  constructor(repository: OrderRepository) {
    this.repository = repository;
  }

  async getOrders(): Promise<OrderDTO[]> {
    return await this.repository.fetchOrders();
  }

  async createOrder(order: OrderDTO): Promise<void> {
    await this.repository.createOrder(order);
  }
}
