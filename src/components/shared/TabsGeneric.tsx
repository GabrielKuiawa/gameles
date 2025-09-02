import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import { TabsPropsGeneric } from "@/types/props";

export default function TabsGeneric<T>(props: TabsPropsGeneric<T>) {
  const [selected, setSelected] = useState<string | number>(
    props.initialSelected ?? (props.data[0] ? props.getId(props.data[0]) : "")
  );

  useEffect(() => {
    if (props.data[0]) setSelected(props.getId(props.data[0]));
  }, [props.data]);

  const handleChange = (id: string | number) => {
    setSelected(id);
    props.onChange?.(id);
  };

  return (
    <>
      <Tabs
        data={props.data.map((item) => ({ id: props.getId(item), label: props.getLabel(item) }))}
        value={selected.toString()}
        onChange={(id) => handleChange(id)}
      />
      {props.renderSection && props.renderSection(selected)}
    </>
  );
}
