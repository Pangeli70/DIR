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
            menu: [
                {
                    href: "https://apg-cdn.deno.dev/",
                    caption: "Cdn",
                    description: "A personal content delivery network on deno deploy with simple cache management."
                },
                {
                    href: "https://apg-tng.deno.dev/",
                    caption: "Tng",
                    description: "A template engine to produce static Server Side Rendered Html."
                },
                {
                    href: "",
                    caption: "Dhe",
                    description: "A component style engine to produce static Server Side Rendered Html."
                },
                {
                    href: "",
                    caption: "Lgr",
                    description: "A series of tools to manage logging and performance measurements using Deno."
                },
                {
                    href: "",
                    caption: "Mng",
                    description: "A series of tools to manage Mongo DB connections and operations."
                }
                ,
                {
                    href: "",
                    caption: "Jsv",
                    description: "A series of tools gor Json validation through Json schemas."
                }
            ],
        };

        const html = await Tng.ApgTngService.Render("/home.html", templateData) as string;

        response.html(html);

    }


}
