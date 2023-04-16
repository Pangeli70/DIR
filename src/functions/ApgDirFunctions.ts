/** -----------------------------------------------------------------------
 * @module [Dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * -----------------------------------------------------------------------
 */

import { eApgDirEntries } from "../enums/eApgDirEntries.ts";

const PORT_BASE = 49600;

/** Get the number of the port for the developmet server based on the Dir entry */
export function ApgDirGetLocalPort(aentry: eApgDirEntries) {
    return PORT_BASE + aentry;
}