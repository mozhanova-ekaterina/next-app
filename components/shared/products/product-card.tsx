import { Button, Card, CardBody, CardFooter, Image } from "@/components/ui";
import React from "react";
import Title from "../title";
import { CirclePlus, RussianRuble } from "lucide-react";

type Props = {
  name: string;
  id: string;
  imageUrl: string;
  price: number;
};

const ProductCard: React.FC<Props> = ({ name, id, imageUrl, price }) => {
  return (
    <Card className="">
      <CardBody className="overflow-hidden">
        <Image
          className="object-cover w-full h-[250px]"
          alt="Product image"
          src={imageUrl}
          removeWrapper
        />
        <Title text={name} size="xs" className="font-bold mt-3" />
        <p className="py-3 ">{}</p>
      </CardBody>
      <CardFooter className="inline-flex items-center justify-between gap-2">
        <p className="inline-flex items-center font-bold">
          от {price}
          <RussianRuble size={"15px"} />
        </p>
        <Button variant="solid" color="primary" endContent={<CirclePlus />} className="">
          Добавить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
