import { expect, test } from "@jest/globals";

import { hello } from "../index";

test("test", () => {
  expect(hello()).toBe("Hello world!");
});
