/** -----------------------------------------------------------------------
 * @module [Dir/Application]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/30] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash, Uts, Tng } from "./srv/deps.ts";
import { Dir} from "./mod.ts";
import { resources } from "./srv/res.ts";
import { services } from "./srv/svcs.ts";


const SERVER_INFO = Dir.ApgDirGetServerInfo(Dir.ApgDirEntries[Dir.eApgDirEntriesIds.dir]);


Tng.ApgTngService.Init("./srv/templates", "", {
  useCache: false,
  cacheChunksLongerThan: 100,
  consoleLog: true,
  beginMarkup: "<%",
  endMarkup: "%>"
});


const server = new Drash.Server({
  hostname: '0.0.0.0',
  port: SERVER_INFO.localPort,
  resources: resources,
  services: services,
  protocol: "http"
});

server.run();

Uts.ApgUtsServer.StartupResume(SERVER_INFO);
