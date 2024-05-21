import { createOrder } from "@application/services/OrderService";
import { OrderDTO } from "@application/dto/OrderDTO";
import { IOrderRepository } from "@domain/repositories/OrderRepository";

export const createOrderUseCase =
  (orderRepository: IOrderRepository) => async (orderDTO: OrderDTO) => {
    return createOrder(orderRepository)(orderDTO);
  };
