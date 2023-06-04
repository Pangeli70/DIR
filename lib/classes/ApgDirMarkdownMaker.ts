/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/24]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
*/

import { eApgDirEntriesIds } from "../enums/eApgDirEntriesIds.ts";
import { IApgDirEntry } from "../interfaces/IApgDirEntry.ts";

/**
 * Create a markdown formatted file from the ApgDirEntry data
 */
export class ApgDirMarkdownMaker {

    static Convert(aentries: Record<eApgDirEntriesIds, IApgDirEntry>, aid: eApgDirEntriesIds) {

        const entry: IApgDirEntry = aentries[aid];

        const NL = "\n\n<br>\n";
        const HR = "\n---\n";

        const r: string[] = [];

        r.push(`# **${entry.caption}** ${NL} `);

        r.push(`### ${entry.title} ${NL}`);
        if (entry.subTitle !== undefined) {
            r.push(`${entry.subTitle} ${NL}`);
        }
        r.push(`Current version: **${entry.version}** ${NL}`);
        r.push(`Last release: **${entry.released}** ${NL}`);
        r.push(`Since: **${entry.since}** ${NL}`);

        r.push(`<br>\n`);

        r.push(`## Library ${HR}`);
        r.push(`${entry.library} ${NL}`);
        r.push(`${entry.github} ${NL}`);

        r.push(`Import it in your deps.ts file using: ${NL}`);
        const lib = `export * as ${entry.caption.split("-")[1]} from "${entry.import}"`;
        r.push(`> ${lib} ${NL}`);

        r.push(`The library has the following Apg dependencies: ${NL}`);
        for (const id of entry.libDeps) {
            const caption = aentries[id].caption
            const link = aentries[id].github
            r.push(`> [${caption}](${link})${NL}`);
        }
        r.push(`${NL}<br>\n`);

        r.push(`## Help ${HR}`);
        r.push(`[Index](hlp/index.md)  ${NL}`);

        r.push(`<br>\n`);

        r.push(`## Microservice ${HR}`);
        r.push(`${entry.microservice} ${NL}`);

        if (entry.deploy) {
            r.push(`${entry.deploy} ${NL}`);
        }

        if (entry.srvDeps) {
            r.push(`The microservice has the following Apg additional dependencies for libraries and services: ${NL}`);
            for (const id of entry.srvDeps) {
                let caption = id as string;
                let link = id as string;
                if (aentries[<eApgDirEntriesIds>id]) {
                    caption = aentries[<eApgDirEntriesIds>id].caption
                    link = aentries[<eApgDirEntriesIds>id].github as string;
                }
                r.push(`> [${caption}](${link})${NL}`);
            }
        }
        r.push(`<br>\n`);

        return r.join("\n");

    }

}