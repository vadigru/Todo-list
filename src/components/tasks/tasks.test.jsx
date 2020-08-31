import React from "react";
import renderer from "react-test-renderer";

import Tasks from "./tasks";

it(`Should render Tasks component`, () => {
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
        <Tasks
          tasks={tasks}
          onTaskClick={() => {}}
          onDeleteButtonClick={() => {}}
          onDropUpdate={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
