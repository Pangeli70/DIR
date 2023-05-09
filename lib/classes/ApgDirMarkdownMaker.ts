/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/24]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
*/

import { IApgDirEntry } from "../interfaces/IApgDirEntry.ts";

export class ApgDirMarkdownMaker { 

    static Convert(aentry: IApgDirEntry) {
        
        const NL = "\n\n<br>\n";
        const HR = "\n---\n";

        const r: string[] = [];
        
        r.push(`# **${aentry.caption}** ${NL} `);
        
        r.push(`### ${aentry.title} ${NL}`);
        if (aentry.subTitle !== undefined) { 
            r.push(`${aentry.subTitle} ${NL}`);
        }
        r.push(`First released: **${aentry.released}** ${NL}`);

        r.push(`Current version: **${aentry.version}** ${NL}`);

        r.push(`<br>\n`); 

        r.push(`## Library ${HR}`); 
        r.push(`${aentry.library} ${NL}`);
        r.push(`${aentry.github} ${NL}` );

        r.push(`Import it in your deps.ts file using: ${NL}`);
        const lib = `export * from "${aentry.import}"`;
        r.push(`> ${lib} ${NL}`);
        
        r.push(`## Help ${HR}`);
        r.push(`[Index](hlp/index.md)  ${NL}`);

        r.push(`<br>\n`); 

        r.push(`## Microservice ${HR}`); 
        r.push(`${aentry.microservice} ${NL}`);
        r.push(`${aentry.deploy} ${NL}`);
        
        return r.join("\n");

    }

}