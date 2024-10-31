import clsx from "clsx";
import React from "react";
import Title from "../title";
import CheckboxFilterGroup from "./checkbox-group";
import FilterGroup from "./filter-group";
import RadioFilterGroup from "./radio-group";
import RangeSlider from "./range-slider";
import { TCheckboxValue } from "@/types";

type Props = {
  className?: string;
};
const checkboxValue: TCheckboxValue[] = [
  { text: "Новинки", value: "Новинки" },
  { value: "Акции", text: "Акции" },
  { value: "Сырный соус", text: "Сырный соус" },
  { value: "Моцарелла", text: "Моцарелла" },
  { value: "Солённые огурчики", text: "Солённые огурчики" },
  { value: "Красный лук", text: "Красный лук" },
  { value: "Томаты", text: "Томаты" },
  { value: "Помидоры", text: "Помидоры" },
  { value: "Лук репчатый", text: "Лук репчатый" },
  { value: "Салат", text: "Салат" },
  { value: "Бекон", text: "Бекон" },
  { value: "Сыр", text: "Сыр" },
  { value: "Курица", text: "Курица" },
  { value: "Колбаса", text: "Колбаса" },
  { value: "Грибы", text: "Грибы" },
  { value: "Чеснок", text: "Чеснок" },
  { value: "Петрушка", text: "Петрушка" },
  { value: "Шампиньоны", text: "Шампиньоны" },
];

const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "p-4 max-w-[244px]")}>
      <Title text="Фильтрация" className="font-bold mb-3" />
      <FilterGroup>
        <CheckboxFilterGroup items={[checkboxValue[0], checkboxValue[1]]} defaultValue={[checkboxValue[0]]} />
      </FilterGroup>
      <FilterGroup title="Цена от и до:">
        <RangeSlider min={0} max={1000} value={[0, 1000]} step={50} />
      </FilterGroup>
      <FilterGroup title="Ингредиенты:">
        <CheckboxFilterGroup
          className="max-h-[400px]"
          limit={5}
          items={checkboxValue}
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
