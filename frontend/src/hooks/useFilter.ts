import { useState } from "react";

function useFilter<T>(
  allData: Array<T>,
  filterFields: Array<keyof T>,
  valueFilter: string
): [() => Array<T>, (newValue: string) => void] {
  const [activValueFilter, setActivValueFilter] = useState(valueFilter);

  const updateActivFilterValue = (newValues: string) => {
    setActivValueFilter(newValues);
  };

  const checkedIncludesValue = (dataItem: T) => {
    return filterFields.some((e) =>
      String(dataItem[e]).toUpperCase().includes(activValueFilter.toUpperCase())
    );
  };

  const filtredDate = () => {
    return allData.filter((dataItem) => checkedIncludesValue(dataItem));
  };

  return [filtredDate, updateActivFilterValue];
}

export default useFilter;
