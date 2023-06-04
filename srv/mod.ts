/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * ------------------------------------------------------------------------
*/
import { Edr } from "./deps.ts";

import { ApgDirHomeResource } from "./resources/ApgDirHomeResource.ts";
import { ApgDirMarkdownResource } from "./resources/ApgDirMarkdownResource.ts";


export const ApgDirResources: typeof Edr.Drash.Resource[] = [

    // Dir
    ApgDirHomeResource,
    ApgDirMarkdownResource

];

export const ApgDirServices: Edr.Drash.Service[] = [
    new Edr.Drash.CORSService()
];
