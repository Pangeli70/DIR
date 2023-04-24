import { IApgDirEntry } from "../interfaces/IApgDirEntry.ts";
/** -----------------------------------------------------------------------
 * @module [Dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/24]
 * -----------------------------------------------------------------------
 */

export class ApgDirMarkupMaker { 

    static Convert(aentry: IApgDirEntry) {
        
        const NL = "\n\n<br>\n";
        const NAME = aentry.caption.substring(4, 7);

        const r: string[] = [];
        
        r.push(`# ${aentry.caption} ${NL} `);
        r.push(`${aentry.title} ${NL}`);
        if (aentry.subTitle !== undefined) { 
            r.push(`${aentry.subTitle} ${NL}`);
        }
        r.push(`<br>\n`); 

        r.push(`### Module ${NL}`); 
        r.push(`${aentry.module}`);
        r.push(`> ${aentry.github} ${NL}` );

        r.push(`### Microservice `); 
        r.push(`${aentry.microservice}`);
        r.push(`> ${aentry.href} ${NL}` );

        r.push(`### First released `); 
        r.push(`> ${aentry.released} ${NL}`);

        r.push(`### Current version `); 
        r.push(`> ${aentry.version} ${NL}`);

        r.push(`### Import library in your deps.ts file using `);
        const lib = `export * as ${NAME} from "${aentry.import}"`;
        r.push(`> ${lib} ${NL}`);

        r.push(`## Usage ${NL}`);
        r.push(`> [Brief help](usage/usage.md)`);
        return r.join("\n");
    }

}