import { ProductDTO } from "@application/dto/ProductDTO";
import { ProductService } from "@application/services/ProductService";

export class AddProductUseCase {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  async execute(product: ProductDTO): Promise<void> {
    await this.productService.addProduct(product);
  }
}
