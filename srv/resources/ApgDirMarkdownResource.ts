/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/24]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Edr, Uts } from "../deps.ts";
import * as Dir from "../../lib/mod.ts";

export class ApgDirMarkdownResource extends Edr.Drash.Resource {

    public override paths = ["/markdown/:entry"];

    public GET(request: Edr.Drash.Request, response: Edr.Drash.Response) {

        const rawEntry = request.pathParam('entry')!
        const entry = rawEntry.toLowerCase().split("-")[1] as Dir.eApgDirEntriesIds;
        const isValidEntry = Uts.ApgUtsEnum.StringContains(Dir.eApgDirEntriesIds, entry);
        const markdown = !isValidEntry ?
            `The submitted entry [${rawEntry}] was not found ` :
            Dir.ApgDirMarkdownMaker.Convert(Dir.ApgDirEntries, entry);

        response.text(markdown);

    }

}
