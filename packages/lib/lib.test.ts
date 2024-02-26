import path from "node:path";

import config from "config";
import { expect, test } from "vitest";

test("cwd", () => {
  expect(config.get("baz")).toEqual("qux");
  expect(path.basename(process.cwd())).toEqual("lib");
});
