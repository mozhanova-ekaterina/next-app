import clsx from "clsx";
import React from "react";
import Title from "../title";
import CheckBoxGroup from "./checkBoxGroup";
import FilterGroup from "./filterGroup";
import { RussianRuble } from "lucide-react";
import { Input, Slider } from "@/components/ui";
import RadioFilterGroup from "./radioFilterGroup";
import RangePrice from "./rangePrice";

type Props = {
  className?: string;
};

const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "p-4 max-w-[244px]")}>
      <Title text="Фильтрация" className="font-bold mb-3" />
      <FilterGroup>
        <CheckBoxGroup
          values={["Новинки", "Акции"]}
          defaultValue={["Новинки"]}
        />
      </FilterGroup>
      <FilterGroup title="Цена от и до:">
        <RangePrice />
      </FilterGroup>
      <FilterGroup title="Ингредиенты:">
        <CheckBoxGroup
          defaultValue={["Сырный соус"]}
          values={[
            "Сырный соус",
            "Моцарелла",
            "Солённые огурчики",
            "Красный лук",
            "Томаты",
          ]}
        />
      </FilterGroup>
      <FilterGroup title="Тип теста:" divider={false}>
        <RadioFilterGroup
          values={["Традиционное тесто", "Тонкое"]}
          defaultValue="Традиционное тесто"
        />
      </FilterGroup>
    </div>
  );
};

export default Filters;
