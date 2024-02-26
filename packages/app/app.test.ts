import path from "node:path";

import config from "config";
import { expect, test } from "vitest";

test("cwd", () => {
  expect(config.get("foo")).toEqual("bar");
  expect(path.basename(process.cwd())).toEqual("app");
});
