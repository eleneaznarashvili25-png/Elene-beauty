import type { Product } from "../types/Product";

const API_URL = "https://dummyjson.com/products";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/category/beauty`);

  if (!response.ok) {
    throw new Error("პროდუქტების ჩატვირთვა ვერ მოხერხდა");
  }

  const data = await response.json();

  return data.products;
}

export async function getProductById(
  id: number
): Promise<Product> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("პროდუქტი ვერ მოიძებნა");
  }

  return response.json();
}
export async function searchProducts(
  query: string
): Promise<Product[]> {
  const response = await fetch(
    `${API_URL}/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("პროდუქტების ძებნა ვერ შესრულდა");
  }

  const data = await response.json();

  return data.products;
}