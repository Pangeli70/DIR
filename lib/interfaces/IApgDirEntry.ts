/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { eApgDirEntriesIds } from "../enums/eApgDirEntriesIds.ts";

/** Entry for the Apg ecosystem library directory */
export interface IApgDirEntry { 

    /** Identification string */
    id: eApgDirEntriesIds
    /** Acronym of the library */
    caption: string;
    /** Title of the library */
    title: string;
    /** Sub Title of the library */
    subTitle?: string;
    /** Current semver */
    version: string;
    /** Last release */
    released: string;
    /** Date first release */
    since: string;
    /** Description of the module */
    library: string;
    /** Github repository address of the library */
    github: string;
    /** Import string for the deps.ts file*/
    import: string;
    /** Library dependencies */
    libDeps: eApgDirEntriesIds[];
    /** Description of the microservice.  */
    microservice: string;
    /** Local port of the microservice */
    localPort?: number;
    /** Address of the example or test website*/
    deploy?: string;
    /** Microservice dependencies */
    srvDeps?: eApgDirEntriesIds[];
}
