"use client";

import { Button, Checkbox, CheckboxGroup, Input } from "@/components/ui";
import { TCheckboxValue } from "@/types";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

type Props = {
  className?: string;
  items: TCheckboxValue[];
  defaultValue?: string[];
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
  const [selectedItems, setSelectedItems] = useState<TCheckboxValue[]>([]);
  const [outputItems, setOutputItems] = useState<TCheckboxValue[]>(
    items.slice(0, limit)
  );

  useEffect(() => {
    setOutputItems(showAll ? items : items.slice(0, limit));
  }, [showAll]);

  useEffect(() => {
    if (searchValue) {
      setOutputItems(
        items.filter((item) =>
          item.text.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (!searchValue && showAll) {
      setOutputItems(items);
    } else {
      setOutputItems(items.slice(0, limit));
    }
  }, [searchValue]);

  return (
    <>
      {showAll && (
        <Input
          variant="underlined"
          color="primary"
          value={searchValue}
          placeholder="Поиск..."
          onChange={e => setSearchValue(e.target.value)}
        />
      )}
      <CheckboxGroup
        defaultValue={defaultValue}
        className={clsx(className, "my-4", { "overflow-y-scroll": limit && showAll && outputItems.length >= limit })}
      >
        {outputItems.map((item, i) => (
          <Checkbox value={item.value} key={i}>
            {item.text}
          </Checkbox>
        ))}
      </CheckboxGroup>
      {limit && items.length > limit && (
        <Button
          variant="light"
          className="text-primary"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Скрыть" : "Показать всё"}
        </Button>
      )}
    </>
  );
};

export default CheckboxFilterGroup;
