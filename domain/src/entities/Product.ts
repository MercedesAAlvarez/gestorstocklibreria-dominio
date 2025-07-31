// domain/src/entities/Product.ts

export class Product {
  public readonly id: number;
  public name: string;
  public description?: string;
  public price: number;
  public stock: number;

  constructor(props: {
    id: number;
    name: string;
    description?: string;
    price: number;
    stock: number;
  }) {
    if (!props.name || props.name.trim() === '') {
      throw new Error('Product name is required');
    }

    if (props.price <= 0) {
      throw new Error('Product price must be greater than 0');
    }

    if (props.stock < 0) {
      throw new Error('Product stock cannot be negative');
    }

    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
    this.stock = props.stock;
  }
}
