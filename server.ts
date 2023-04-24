/** -----------------------------------------------------------------------
 * @module [Dir/Application]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/30] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Uts, Tng } from "./deps.ts";
import { ApgDirGetServerInfo, eApgDirEntriesIds } from "./mod.ts";
import { resources } from "./res.ts";
import { services } from "./svcs.ts";


const SERVER_INFO = ApgDirGetServerInfo(eApgDirEntriesIds.dir);


Tng.ApgTngService.Init("./templates", "", {
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
