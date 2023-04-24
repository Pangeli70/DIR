/** -----------------------------------------------------------------------
 * @module [Dir/srv]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/24]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash } from "../deps.ts";
import { ApgDirEntries, ApgDirMarkdownMaker } from "../../lib/mod.ts";

export class ApgDirMarkdownResource extends Drash.Resource {

    public override paths = ["/markdown/:entry"];

    public GET(request: Drash.Request, response: Drash.Response) {

        const rawEntry = request.pathParam('entry');
        let index = -1;
        for (let i = 0; i < ApgDirEntries.length ; i++) { 
            if (ApgDirEntries[i].caption == rawEntry!) { 
                index = i;
                break;
            }
        }

        const markdown = index == -1 ?
            `Error in Dir entry conversion: submitted entry [${rawEntry}] not found `:
            ApgDirMarkdownMaker.Convert(ApgDirEntries[index]) ;

        response.text(markdown);

    }


}
