import { check, checkDirectory } from "typings-tester";
import util from "util"
import glob1 from "glob";

const glob = util.promisify(glob1);



it("Should type check", async () => {
  const files = await glob("exercises/**/*.test.{ts,tsx}")
  check(files, "tsconfig.json")
});
