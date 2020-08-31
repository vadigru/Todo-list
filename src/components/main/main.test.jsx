import React from "react";
import renderer from "react-test-renderer";

import Main from "./main";

it(`Should render Main component`, () => {
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
        <Main
          tasks={tasks}
          onTaskClick={() => {}}
          onSubmitButtonClick={() => {}}
          onDeleteButtonClick={() => {}}
          onDropUpdate={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
