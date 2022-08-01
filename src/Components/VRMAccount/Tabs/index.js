import React, { useState } from "react";
import { useEffect } from "react";

import { Lists, ContentStyle } from "./styles";

import Tab from "./Tab";

function Content({ children, active, id }) {
  return (
    <ContentStyle className={active ? "show" : "hidden"}>
      {children}
    </ContentStyle>
  );
}

export default function Tabs({ items, data }) {
  const [active, setActive] = useState({
    id: "Dahboard",
    label: "Dahboard",
    content: "Dashboard",
  });

  useEffect(() => {
    setActive(items[0]);
  }, [items]);

  return (
    <>
      <Lists>
        {items.map((item) => (
          <Tab
            label={item.label}
            active={active === item}
            onClick={() => setActive(item)}
          />
        ))}
      </Lists>
      <div>
        {items.map((item) => (
          <Content active={active === item}>{item.content}</Content>
        ))}
      </div>
    </>
  );
}
