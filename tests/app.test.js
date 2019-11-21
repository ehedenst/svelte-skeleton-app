/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import App from "../src/App.svelte";

describe("App", () => {
  test("Should just work", () => expect(true).toBe(true));
  test("must render greeting", () => {
    const { getByText } = render(Comp, { props: { name: "World" } });
    expect(getByText("Hello World!")).toBeInTheDocument();
  });
  /*
  test("must render greeting", () => {
    const { getByText } = render(App, { props: { name: "world" } });

    expect(getByText("Hello world!"));
  });

  test("must snapshot", () => {
    const { container } = render(App, { props: { name: "world" } });

    expect(container).toMatchSnapshot();
  });*/
});
