/** -----------------------------------------------------------------------
 * @module [Dir/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/30] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Tng } from "../../deps.ts";

export class ApgDirHomeResource extends Drash.Resource {

    public override paths = ["/"];

    public async GET(_request: Drash.Request, response: Drash.Response) {

        const templateData = {
            site: { 
                name: "Apg-Dir",
                title: "Directory of the Apg services"
            },
            page: {
                title: "Home",
                toolbar: "",
                released: "2022/30/10"
            },
            links: [
                {
                    href: "/basic",
                    caption: "Basic"
                }
            ],
        };

        const html = await Tng.ApgTngService.Render("/home.html", templateData) as string;

        response.html(html);

    }


}
