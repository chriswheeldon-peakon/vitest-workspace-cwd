import path from "node:path";

if (path.basename(process.cwd()) === "lib") {
  process.env["NODE_CONFIG_DIR"] = "./config";
} else {
  process.env["NODE_CONFIG_DIR"] = "./packages/lib/config";
}
