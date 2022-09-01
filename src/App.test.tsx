import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("url is correct", () => {
  render(<App />);
  const linkEl = screen.getByRole("link", {
    name: /learn testing/i,
  }) as HTMLLinkElement;
  expect(linkEl.href).toMatch("ultimateqa.com");
});
