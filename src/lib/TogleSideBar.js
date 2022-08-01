import { useState } from "react";

const TogleSidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return {
    sidebar,
    setSidebar,
    handleSidebar,
  };
};

export default TogleSidebar;
