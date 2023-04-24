/** -----------------------------------------------------------------------
 * @module [Dir/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/24] 
 * -----------------------------------------------------------------------
 */
import { Drash } from "../../deps.ts";
import { ApgDirEntries } from "../../mod.ts";
import { ApgDirMarkupMaker } from "../../src/classes/ApgDirMarkupMaker.ts";

export class ApgDirMarkupResource extends Drash.Resource {

    public override paths = ["/markup/:entry"];

    public GET(request: Drash.Request, response: Drash.Response) {

        const rawEntry = request.pathParam('entry');
        let index = -1;
        for (let i = 0; i < ApgDirEntries.length ; i++) { 
            if (ApgDirEntries[i].caption == rawEntry!) { 
                index = i;
                break;
            }
        }

        const markup = index == -1 ?
            `Error in Dir entry conversion: submitted entry [${rawEntry}] not found `:
            ApgDirMarkupMaker.Convert(ApgDirEntries[index]) ;

        response.text(markup);

    }


}
