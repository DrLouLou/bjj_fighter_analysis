import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("Show App Component", () => {
  render(
    <App
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      pca={null}
    />,
  );

  expect(
    screen.getByText("Hello Vite + Redux-Toolkit & RTK Query!"),
  ).toBeInTheDocument();
});

test("Working Counter", async () => {
  const user = userEvent.setup();
  const { getByText } = render(
    <App
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      pca={null}
    />,
  );
  expect(getByText("count is: 0")).toBeInTheDocument();

  const button = getByText("Increment");

  await user.click(button);
  expect(getByText("count is: 1")).toBeInTheDocument();

  await user.click(button);
  expect(getByText("count is: 2")).toBeInTheDocument();

  await user.click(button);
  expect(getByText("count is: 3")).toBeInTheDocument();
});
