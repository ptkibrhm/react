import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

const MUIProgress = () => {
  const [progress, setProgress] = useState(0);

 
 useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);



  return (
    <div>
      <CircularProgress
        aria-label="Loading"
        color="inherit"
        variant="determinate"
        value={25}
      />
      <LinearProgress 
      variant="determinate"
      value={progress}
      aria-label="Export data" />
    </div>
  );
};

export default MUIProgress;
