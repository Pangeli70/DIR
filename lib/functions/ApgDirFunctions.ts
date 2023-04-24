/** -----------------------------------------------------------------------
 * @module [Dir/lib]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { Uts } from "../deps.ts";
import { IApgDirEntry } from "../interfaces/IApgDirEntry.ts";

const PORT_BASE = 49600;

/** Get the server info used for startup and resume of server */
export function ApgDirGetServerInfo(
    aentry: IApgDirEntry,
    aportBase = PORT_BASE
) {
    const r: Uts.IApgUtsServerInfo = {
        caption: aentry.caption,
        title: aentry.title,
        version: aentry.version,
        localPort: aportBase + aentry.id
    }

    return r;
}