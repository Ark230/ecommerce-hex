import { ProductDTO } from "@application/dto/ProductDTO";
import { ProductService } from "@application/services/ProductService";

export class GetProductsUseCase {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  async execute(): Promise<ProductDTO[]> {
    return await this.productService.getProducts();
  }
}
