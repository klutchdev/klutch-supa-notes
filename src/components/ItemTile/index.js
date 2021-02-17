/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import supabase from "../../supabase";
import Checkbox from "../Checkbox";

const ItemTile = ({ item, itemsList, setItemsList }) => {
  const [completed, setCompleted] = useState(false);

  const deleteCompleted = async () => {
    if (completed === true) {
      setTimeout(async () => {
        try {
          await supabase.from("items").delete().eq("id", item.id);
          setItemsList(itemsList.filter((x) => x.id !== item.id));
        } catch (error) {
          console.log(error);
        }
      }, 3000);
    }
  };

  useEffect(() => {
    deleteCompleted();
  }, [completed]);

  return (
    <div onClick={() => setCompleted(!completed)} className="item-tile">
      <Checkbox completed={completed} />
      <CenterContent content={item.content} completed={completed} />
    </div>
  );
};

const CenterContent = ({ completed, content }) => {
  return (
    <div className={completed ? "center-content-completed" : "center-content"}>
      <h2>{content}</h2>
    </div>
  );
};

export default ItemTile;
