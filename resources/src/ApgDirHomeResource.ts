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
                title: "Apg microservices on Deno Deploy"
            },
            page: {
                title: "Directory",
                toolbar: "",
                released: "2022/30/10"
            },
            menu: [
                {
                    href: "https://apg-cdn.deno.dev/",
                    caption: "Cdn",
                    description: "A personal content delivery network on deno deploy with simple cache management.",
                    released: "2022/10"
                },
                {
                    href: "https://apg-tng.deno.dev/",
                    caption: "Tng",
                    description: "A template engine to produce static Server Side Rendered Html.",
                    released: "2022/10"
                },
                {
                    href: "https://apg-tst.deno.dev/",
                    caption: "Tst",
                    description: "A web service useful to browse ApgUtsSpecable tests.",
                    released: "2022/12"
                },
                {
                    href: "https://apg-cad.deno.dev/",
                    caption: "Cad",
                    description: "A minimalistic 2D cad engine to produce Server Side Rendered SVG and DXF drawings .",
                    released: "2022/12"
                },
                {
                    href: "https://apg-cii.deno.dev/",
                    caption: "Cii",
                    description: "A Cad Instructions Interpreter that uses a headless 2D cad to produce SVG and DXF drawings .",
                    released: "2023/01"
                },
                {
                    href: "/",
                    caption: "Dhe",
                    description: "A component style engine to produce static Server Side Rendered Html.",
                    released: ""
                },
                {
                    href: "/",
                    caption: "Lgr",
                    description: "A series of tools to manage logging and performance measurements using Deno.",
                    released: ""
                },
                {
                    href: "/",
                    caption: "Mng",
                    description: "A series of tools to manage Mongo DB connections and operations.",
                    released: ""
                },
                {
                    href: "/",
                    caption: "Jsv",
                    description: "A series of tools gor Json validation through Json schemas.",
                    released: ""
                }
            ],
        };

        const html = await Tng.ApgTngService.Render("/home.html", templateData) as string;

        response.html(html);

    }


}
