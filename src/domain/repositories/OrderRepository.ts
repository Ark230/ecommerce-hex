import { OrderDTO } from "@application/dto/OrderDTO";

export interface OrderRepository {
  fetchOrders: () => Promise<OrderDTO[]>;
  createOrder: (order: OrderDTO) => Promise<void>;
}
