import React from "react";
import ProductsList from "./products-list";

type Props = {};

const Products = () => {
  return (
    <div>
      <ProductsList
        className="grid grid-cols-3 gap-3 grid-rows-[auto]"
        title="Category 1"
        categoryId={1}
        products={[
          {
            id: 1,
            name: "Product 1",
            imageUrl: "1.jpg",
            items: [
              {
                price: 100,
              },
            ],
          },
          {
            id: 2,
            name: "Product 2",
            imageUrl: "2.jpg",
            items: [
              {
                price: 200,
              },
            ],
          },
          {
            id: 3,
            name: "Product 3",
            imageUrl: "3.jpg",
            items: [
              {
                price: 300,
              },
            ],
          },
          {
            id: 4,
            name: "Product 4",
            imageUrl: "2.jpg",
            items: [
              {
                price: 400,
              },
            ],
          },
          {
            id: 5,
            name: "Product 5",
            imageUrl: "3.jpg",
            items: [
              {
                price: 500,
              },
            ],
          },
          {
            id: 6,
            name: "Product 6",
            imageUrl: "1.jpg",
            items: [
              {
                price: 600,
              },
            ],
          }
        ]}
      />
      <ProductsList
        className="grid grid-cols-3 gap-3 grid-rows-[auto]"
        title="Category 2"
        categoryId={2}
        products={[
          {
            id: 1,
            name: "Product 1",
            imageUrl: "1.jpg",
            items: [
              {
                price: 100,
              },
            ],
          },
          {
            id: 2,
            name: "Product 2",
            imageUrl: "2.jpg",
            items: [
              {
                price: 200,
              },
            ],
          },
          {
            id: 3,
            name: "Product 3",
            imageUrl: "3.jpg",
            items: [
              {
                price: 300,
              },
            ],
          },
          {
            id: 4,
            name: "Product 4",
            imageUrl: "2.jpg",
            items: [
              {
                price: 400,
              },
            ],
          },
          {
            id: 5,
            name: "Product 5",
            imageUrl: "3.jpg",
            items: [
              {
                price: 500,
              },
            ],
          },
          {
            id: 6,
            name: "Product 6",
            imageUrl: "1.jpg",
            items: [
              {
                price: 600,
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Products;
