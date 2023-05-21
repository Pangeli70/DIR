/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/30] Deno Deploy Beta
 * @version 0.9.6 [APG 2023/04/16] Dir Entries
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash, Tng, Dir } from "../deps.ts";


export class ApgDirHomeResource extends Drash.Resource {

    public override paths = ["/"];

    public async GET(_request: Drash.Request, response: Drash.Response) {

        const SERVER_INFO = Dir.ApgDirEntries[Dir.eApgDirEntriesIds.dir];

        const templateData = {
            site: {
                name: SERVER_INFO.caption,
                title: SERVER_INFO.title
            },
            page: {
                title: "Directory",
                toolbar: "",
                released: "2022/30/10"
            },
            record: Dir.ApgDirEntries,
        };

        const html = await Tng.ApgTngService.Render("/ApgDirHomePage.html", templateData) as string;

        response.html(html);

    }


}
