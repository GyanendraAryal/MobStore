export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    camera: string;
  };
}