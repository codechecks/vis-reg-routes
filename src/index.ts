import visReg from "@codechecks/vis-reg";
import { dir as tmpDir } from "tmp-promise";
import Pageres from "pageres";
import { parseOptions } from "./options";
import { codechecks } from "@codechecks/client";
import { startServer } from "./start-server";

export async function check(_options: any = {}): Promise<void> {
  const options = parseOptions(_options, codechecks.context.workspaceRoot);

  const server = await startServer(options.buildPath);

  const { path: workDir } = await tmpDir();

  const pageres = new Pageres({ delay: 2 });
  const devices = ["1024x768", "iphone 5s"];
  for (const route of options.routes) {
    pageres.src(`http://localhost:3000/${route}`, devices);
  }
  pageres.dest(workDir);

  await pageres.run();
  server.close();

  await visReg({
    collectionName: options.collectionName,
    imagesPath: workDir,
  });
}

export default check;
