/** -----------------------------------------------------------------------
 * @module [Dir/srv]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * ------------------------------------------------------------------------
*/
import { Drash, Edr } from "./deps.ts";

import { ApgDirHomeResource } from "./resources/ApgDirHomeResource.ts";
import { ApgDirMarkdownResource } from "./resources/ApgDirMarkdownResource.ts";


export const resources: typeof Drash.Resource[] = [

    // Static
    Edr.ApgEdrPublicTextFileResource,
    Edr.ApgEdrPublicBinFileResource,

    // Dir
    ApgDirHomeResource,
    ApgDirMarkdownResource

];
