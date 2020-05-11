import React from 'react';

const CreatedElement = React.createElement(
  "h1",
  { style: { color: "red" } },
  `This element is created with React.createElement`
);

export { CreatedElement };