import React, { useState, useCallback, useEffect } from "react";
import Item from "@/components/sorteable-list/item";
import { Column } from "@/components/sorteable-list";

export interface Item {
  id: string;
  [key: string]: any;
}

export interface ItemUpdated {
  id: string;
  position: number;
}

interface Props {
  data: Item[];
  columns: Column[];
  loading?: boolean;
  showActions?: boolean;
  positioning?: boolean;
  onChange?: (items: ItemUpdated[]) => void;
  onItemRender: (item: any) => React.ReactNode;
}

export const SortableList: React.FC<Props> = (props) => {
  const { data, onChange, loading, positioning, columns, showActions } = props;
  const [dynamicList, setDynamicList] = useState(data);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setDynamicList(data);
  }, [data]);

  useEffect(() => {
    if (!isDragging) {
      // once the dragging is done, create an array with elements whose position was changed
      const changes = data.reduce((acc: ItemUpdated[], item, index) => {
        if (item.id.toString() !== dynamicList[index].id.toString()) {
          const updatedItemIndex = dynamicList.findIndex(
            (newItem) => newItem.id.toString() === item.id.toString()
          );
          if (updatedItemIndex > -1) {
            acc.push({ id: item.id, position: updatedItemIndex + 1 });
          }
        }
        return acc;
      }, []);
      if (changes.length > 0) {
        onChange && onChange(changes);
      }
    }
    // eslint-disable-next-line
  }, [isDragging]);

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragItem = dynamicList[dragIndex];
      const newDynamicList = [...dynamicList];
      newDynamicList.splice(dragIndex, 1);
      newDynamicList.splice(hoverIndex, 0, dragItem);
      setDynamicList(newDynamicList);
    },
    [dynamicList]
  );

  const renderItem = (item: any, index: number) => {
    return (
      <Item
        key={item.id}
        index={index}
        item={item}
        onMoveItem={moveItem}
        onRender={props.onItemRender}
        setIsDragging={setIsDragging}
      />
    );
  };

  return (
    <div>
      <div>
        {/* {<SwapVertIcon className={css.sortHeader} />} */}
        {columns.map((column: Column) => (
          <div
            key={column.title}
            hidden={column.title === "Acciones" && !showActions}
            // className={cx(css.header, column.cellStyle)}
          >
            {column.title}
          </div>
        ))}
        {/* {positioning && <CircularProgress className={css.smallSpinner} />} */}
      </div>
      {/* {loading && (
        <div className={css.mainSpinnerContainer}>
          <CircularProgress />
        </div>
      )} */}
      {dynamicList.map(renderItem)}
      {!dynamicList.length && "No hay datos para mostrar"}
    </div>
  );
};

export default SortableList;
