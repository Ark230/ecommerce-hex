import { ProductDTO } from "@application/dto/ProductDTO";
import { ProductRepository } from "@domain/repositories/ProductRepository";

export class ProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async getProducts(): Promise<ProductDTO[]> {
    return await this.repository.fetchProducts();
  }

  async addProduct(product: ProductDTO): Promise<void> {
    await this.repository.createProduct(product);
  }
}
