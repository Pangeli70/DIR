/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

export * from "./classes/ApgDirMarkdownMaker.ts";

export * from "./enums/eApgDirEntriesIds.ts";
export * from "./enums/eApgDirDeploys.ts";

export * from "./data/ApgDirEntries.ts";

export * from "./statics/ApgDirServer.ts";

export type { IApgDirEntry } from "./interfaces/IApgDirEntry.ts";
export type { IApgDirServerInfo } from "./interfaces/IApgDirServerInfo.ts";