import React from "react";
import renderer from "react-test-renderer";

import Header from "./header";

it(`Should render Header component`, () => {
  const tasks = [
    {
      task: `Task 1`,
      isActive: true
    },
    {
      task: `Task 2`,
      isActive: true
    },
  ];

  const tree = renderer
    .create(
        <Header
          tasks={tasks}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
