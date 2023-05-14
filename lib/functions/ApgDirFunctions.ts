/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { Uts } from "../deps.ts";
import { ApgDirEntries } from "../data/ApgDirEntries.ts";
import { eApgDirEntriesIds } from "../enums/eApgDirEntriesIds.ts";

const PORT_UNDEFINED = 49600;

/** 
 * Get the server info used for startup and resume of server.
 * @Remark Be sure to pass a eApgDirEntriesIds value and not a raw string
 * */
export function ApgDirGetServerInfo(
    aid: eApgDirEntriesIds
) {
    // As long as we pass an eApgDirEntriesIds and not a string the following
    // sould be always valid, non neeed to check if undefined
    const aentry = ApgDirEntries[aid];

    const r: Uts.IApgUtsServerInfo = {
        caption: aentry.caption,
        title: aentry.title,
        version: aentry.version,
        localPort: aentry.localPort || PORT_UNDEFINED
    }

    return r;
}