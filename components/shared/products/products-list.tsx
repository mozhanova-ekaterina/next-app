"use client";

import React, { useEffect, useRef, useState } from "react";
import Title from "../title";
import ProductCard from "./product-card";
import clsx from "clsx";
import { useIntersectionObserver } from "@reactuses/core";
import { useCategoryStore } from "@/store/category";

type Props = {
  products: any[];
  title: string;
  categoryId: number;
  className?: string;
};

const ProductsList: React.FC<Props> = ({
  className,
  products,
  title,
  categoryId,
}) => {
  const intersectionRef = useRef(null);
  const setActiveId = useCategoryStore((state) => state.setActiveId);
  useIntersectionObserver(
    intersectionRef,
    (entry) => {
      entry[0].isIntersecting && setActiveId(categoryId);
    },
    { threshold: 0.4 }
  );

  return (
    <div id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold my-3" />
      <div className={clsx(className)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            id={product.id}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
