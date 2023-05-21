/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/30] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash, Tng, Dir } from "./srv/deps.ts";
import { ApgDirResources } from "./srv/res.ts";
import { ApgDirServices } from "./srv/svcs.ts";

const serverInfo = Dir.ApgDirServer.GetInfo(Dir.eApgDirEntriesIds.dir);

const remoteTngHost = "";

Tng.ApgTngService.Init("./srv/templates", remoteTngHost, {
  useCache: false,
  cacheChunksLongerThan: 100,
  consoleLog: true,
  beginMarkup: "<%",
  endMarkup: "%>"
});


const server = new Drash.Server({
  hostname: '0.0.0.0',
  port: serverInfo.localPort,
  resources: ApgDirResources,
  services: ApgDirServices,
  protocol: "http"
});

server.run();

Dir.ApgDirServer.StartupResume(serverInfo);
