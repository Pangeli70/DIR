/** -----------------------------------------------------------------------
 * @module [Dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * -----------------------------------------------------------------------
 */

/** Entry for the Apg's modules directory */
export interface IApgDirEntry { 

    /** Acronym of the Module/Library*/
    caption: string;
    /** Title of the module */
    title: string;
    /** Description of the module */
    module: string;
    /** Description of the microservice */
    microservice: string;
    /** Github repository address*/
    github: string;
    /** Import string for the deps.ts file*/
    import: string;
    /** Address of the example website (if available)*/
    href: string;
    /** Date first release */
    released: string;
    /** Current semver */
    version: string;
    /** Identification number */
    entry : number
}
