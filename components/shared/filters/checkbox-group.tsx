"use client";

import { Button, Checkbox, CheckboxGroup, Input } from "@/components/ui";
import { TCheckboxValue } from "@/types";
import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  className?: string;
  items: TCheckboxValue[];
  defaultValue?: TCheckboxValue[];
  limit?: number;
};

const CheckboxFilterGroup: React.FC<Props> = ({
  className,
  items,
  defaultValue,
  limit,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>(
    defaultValue?.map((item) => item.value) || []
  );
  const outputItems = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : items.slice(0, limit);

  console.log(selectedItems);

  return (
    <>
      {showAll && (
        <Input
          variant="underlined"
          color="primary"
          value={searchValue}
          placeholder="Поиск..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      )}
      <CheckboxGroup
        defaultValue={defaultValue?.map((item) => item.value)}
        value={selectedItems}
        onValueChange={setSelectedItems}
        className={clsx(className, "my-4", {
          "overflow-y-scroll": limit && showAll && outputItems.length >= limit,
        })}
      >
        {outputItems.map((item, i) => (
          <Checkbox value={item.value} key={i}>
            {item.text}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <div className="inline-flex">
        {limit && items.length > limit && outputItems.length >= limit && (
          <Button
            variant="light"
            className="text-primary p-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "Показать всё"}
          </Button>
        )}
        {selectedItems.length > 0 && (
          <Button
            variant="light"
            className="text-primary p-2"
            onClick={() => setSelectedItems([])}
          >
            Сбросить
          </Button>
        )}
      </div>
    </>
  );
};

export default CheckboxFilterGroup;
