/** -----------------------------------------------------------------------
 * @module [Dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * -----------------------------------------------------------------------
 */

/** Entry for the Apg ecosystem library directory */
export interface IApgDirEntry { 

    /** Identification number */
    entry : number
    /** Acronym of the library */
    caption: string;
    /** Title of the library */
    title: string;
    /** Sub Title of the library */
    subTitle?: string;
    /** Description of the module */
    module: string;
    /** Description of the microservice */
    microservice: string;
    /** Github repository address of the library */
    github: string;
    /** Import string for the deps.ts file*/
    import: string;
    /** Address of the example or test website (if available)*/
    href: string;
    /** Date first release */
    released: string;
    /** Current semver */
    version: string;
}
