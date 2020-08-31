import React from "react";
import renderer from "react-test-renderer";

import Form from "./form";

it(`Should render Form component`, () => {
  const tree = renderer
    .create(
        <Form
          onSubmitButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
