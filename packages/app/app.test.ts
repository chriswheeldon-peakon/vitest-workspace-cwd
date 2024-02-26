import path from "node:path";

import { expect, test } from "vitest";

test("cwd", () => {
  expect(path.basename(process.cwd())).toEqual("app");
});
