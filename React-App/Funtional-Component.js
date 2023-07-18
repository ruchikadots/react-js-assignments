import React from "react";
import ReactDOM from "react-dom/client";

const FragmentTag = function () {
  return (
    <React.Fragment>
      <div>Div 1</div>
      <div>Div 2</div>
      <div>Div 3</div>
    </React.Fragment>
  );
};

const Function1 = () => {
  return (
  <>
    <div>Page 1</div>
    <div>Page 2</div>
    <div>Page 3</div>
  </>
  )
};

const Function2 = () => {
  return (
    <>
      <div>Paragraph 1</div>
      <div>Paragraph 2</div>
      <div>Paragraph 3</div>
    </>
  );
};

const Function3 = () => {
  return (
    <>
      <FragmentTag/>
      <Function1 />
      <Function2 />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Function3 />);
