/** -----------------------------------------------------------------------
 * @module [Dir/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/30] Deno Deploy Beta
 * @version 0.9.6 [APG 2023/04/16] Dir Entries
 * -----------------------------------------------------------------------
 */
import { Drash, Tng } from "../../deps.ts";
import { ApgDirEntries, ApgDirGetServerInfo, eApgDirEntriesIds } from "../../mod.ts";

export class ApgDirHomeResource extends Drash.Resource {

    public override paths = ["/"];

    public async GET(_request: Drash.Request, response: Drash.Response) {

        const SERVER_INFO = ApgDirGetServerInfo(eApgDirEntriesIds.dir);

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
            menu: ApgDirEntries,
        };

        const html = await Tng.ApgTngService.Render("/home.html", templateData) as string;

        response.html(html);

    }


}
