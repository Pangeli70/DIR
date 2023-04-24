/** -----------------------------------------------------------------------
 * @module [Dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * -----------------------------------------------------------------------
 */

import { Uts } from "../../deps.ts";
import { ApgDirEntries } from "../data/ApgDirEntries.ts";
import { eApgDirEntriesIds } from "../enums/eApgDirEntriesIds.ts";

const PORT_BASE = 49600;

/** Get the server info used for startup and resume of server */
export function ApgDirGetServerInfo(aentryId: eApgDirEntriesIds) { 
    const r: Uts.IApgUtsServerInfo = {
        caption: ApgDirEntries[aentryId].caption,
        title: ApgDirEntries[aentryId].title,
        version: ApgDirEntries[aentryId].version,
        localPort: PORT_BASE + aentryId
    }

    return r;
}