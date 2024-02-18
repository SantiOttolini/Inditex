import { getProducts } from "@/api/card";
import React from "react";
import { ProductItem } from "@/components/products/ProductItem";
import { Product } from "@/app/types/product";

interface Props {
  id: number;
}

const Products: React.FC<Props> = ({ id }) => {
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProducts = await getProducts();
      const product = fetchedProducts.find(
        (product: Product) => Number(product.id) === id
      );
      setProduct(product || null);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <div className="flex justify-center w-full h-10">
      <ProductItem product={product} />
    </div>
  );
};

export default Products;
