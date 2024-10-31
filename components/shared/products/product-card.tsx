import { Button, Card, CardBody, CardFooter, Image } from "@/components/ui";
import React from "react";
import Title from "../title";
import { RussianRuble } from "lucide-react";

type Props = {};
const card = {
  title: "Product title",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati a magnam accusantium eveniet itaque facilis! Magnam dolore deleniti dolorem.",
  price: 1000,
  image: "1.jpg",
};

const ProductCard = (props: Props) => {
  return (
    <Card className="max-h-[450px]">
      <CardBody>
        <Image alt="Product image" src={card.image} />
        <Title text={card.title} size="xs" className="font-bold mt-3" />
        <p className="py-3 ">{card.description}</p>
      </CardBody>
      <CardFooter>
        <p className="inline-flex items-center font-bold">
          от {card.price}
          <RussianRuble size={"15px"} />
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
