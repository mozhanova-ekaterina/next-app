"use client";

import clsx from "clsx";
import React from "react";
import { Button, Link } from "../../ui";
import { useCategoryStore } from "@/store/category";

type Props = {
  className?: string;
};

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  { id: 5, name: "Category 5" },
  { id: 6, name: "Category 6" },
];

const Categories: React.FC<Props> = ({ className }) => {
  const activeIndex = useCategoryStore((state) => state.activeId);
  const setActiveId = useCategoryStore((state) => state.setActiveId);
  return (
    <div
      className={clsx(
        className,
        "inline-flex gap-2 p-2 rounded-2xl bg-secondary"
      )}
    >
      {categories.map(({name, id}, index) => (
        <Button
          as={Link}
          href={`#${name}`}
          key={index}
          className={clsx("bg-secondary text-primary font-bold", {
            "bg-primary-foreground": id === activeIndex,
          })}
          onClick={() => setActiveId(index)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
