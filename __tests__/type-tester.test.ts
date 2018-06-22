import { check, checkDirectory } from "typings-tester";
import util from "util"
import glob1 from "glob";

const glob = util.promisify(glob1);



it("Should type check", async () => {
  let files = await glob("exercises/**/*.{ts,tsx}")
  if (process.env.CHECK_FILE) {
    files = files.filter(file => file.includes(process.env.CHECK_FILE!))
  }
  check(files.sort(), "tsconfig.json")
});
