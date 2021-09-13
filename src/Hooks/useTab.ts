import { useState } from "react";

function useTab(initialActiveTab : any) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleChangeActiveTab = (tab : any) => {
    setActiveTab(tab);
  };
  return { activeTab, setActiveTab, handleChangeActiveTab };
}

export default useTab;
