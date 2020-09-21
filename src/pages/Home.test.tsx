import { IonApp } from "@ionic/react";
import { render, wait } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route } from "react-router";
import Home from "./Home";

describe("<Home />", () => {
  it("should display the correct message based on path param", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/home/2"]}>
        <Route path="/home/:id">
          <Home />
        </Route>
      </MemoryRouter>
    );
    await wait(() =>
      expect(container).toHaveTextContent(/This is my second message/)
    );
  });
});
