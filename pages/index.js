import React, { useState } from "react";
import { data, statuses } from "../data";
import DropWrapper from "../components/DropWrapper";
import Column from "../components/Column";
import Item from "../components/Item";

function Home() {
  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find(si => si.status === status);

    setItems(prevState => {
      const newItems = prevState
        .filter(i => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });

      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems(prevState => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <div className="row">
      {statuses.map(s => {
        return (
          <div key={s.status} className="col-wrapper">
            <h2 className="col-header">{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <Column>
                {items
                  .filter(i => i.status === s.status)
                  .map((i, idx) => (
                    <Item
                      key={i.id}
                      index={idx}
                      item={i}
                      moveItem={moveItem}
                      status={s}
                    />
                  ))}
              </Column>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
