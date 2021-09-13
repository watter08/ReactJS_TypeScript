import { useState } from "react";

function useFilter(show = false) {
  const [showFilter, setShowFilter] = useState(show);

  const handleShowFilter = () => setShowFilter(true);

  const handleCloseFilter = () => {
    setShowFilter(false);
  };
  const handleToogleFilter = () => setShowFilter((show) => !show);

  return {
      showFilter, 
      handleShowFilter, 
      handleCloseFilter, 
      handleToogleFilter
  };
}

export default useFilter;
