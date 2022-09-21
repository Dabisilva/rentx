export interface CarsRequest {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: AccessoriesType[];
  photos: string[];
}

interface AccessoriesType {
  type: string;
  name: string;
}
