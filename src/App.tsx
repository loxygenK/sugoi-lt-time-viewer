import React, { FC } from "react";
import { LTTimeViewer } from "./comps/LTTimeViewer";

const App: FC = () => {
  return (
    <div>
      <LTTimeViewer portNumber={12333} />
    </div>
  );
};

export default App;
