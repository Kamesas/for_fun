import React, { FC } from "react";

interface IAppProps {
  [key: string]: any;
}

export const App: FC<IAppProps> = () => {
  return <div className="App">App</div>;
};
