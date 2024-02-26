import path from "node:path";

if (path.basename(process.cwd()) === "app") {
  process.env["NODE_CONFIG_DIR"] = "./config";
} else {
  process.env["NODE_CONFIG_DIR"] = "./packages/app/config";
}
