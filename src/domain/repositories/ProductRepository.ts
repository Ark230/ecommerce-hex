import { ProductDTO } from "@application/dto/ProductDTO";

export interface ProductRepository {
  fetchProducts: () => Promise<ProductDTO[]>;
  createProduct: (product: ProductDTO) => Promise<void>;
}
