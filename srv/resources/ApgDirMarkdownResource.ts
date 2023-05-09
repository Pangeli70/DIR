/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/24]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash , Uts} from "../deps.ts";
import { ApgDirMarkdownMaker, eApgDirEntriesIds } from "../../lib/mod.ts";
import { ApgDirEntries } from "../data/ApgDirEntries.ts";

export class ApgDirMarkdownResource extends Drash.Resource {

    public override paths = ["/markdown/:entry"];

    public GET(request: Drash.Request, response: Drash.Response) {

        const rawEntry = request.pathParam('entry')!;

        const markdown = Uts.ApgUtsEnum.StringContains(eApgDirEntriesIds, rawEntry) ?
            `Error in Dir entry conversion: submitted entry [${rawEntry}] not found `:
            ApgDirMarkdownMaker.Convert(ApgDirEntries[rawEntry as eApgDirEntriesIds]) ;

        response.text(markdown);

    }


}
