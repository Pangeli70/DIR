/** -----------------------------------------------------------------------
 * @module [Dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * -----------------------------------------------------------------------
 */

import { eApgDirEntries } from "../enums/eApgDirEntries.ts";
import { IApgDirEntry } from "../interfaces/IApgDirEntry.ts";



/** Database of the current APG's modules directory */
export const ApgDirEntries: IApgDirEntry[] = [
    {
        caption: "Dir",
        title: "Directory of APG modules on Github and microservices on Deno deploy",
        module: "Exposes the data for the identification of modules and microservices.",
        github: "https://github.com/Pangeli70/apg-dir",
        microservice: "The microservice presents the list as a broswasable directory.",
        href: "https://apg-dir.deno.dev/",
        released: "2022/10",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-dir/master/mod.ts",
        entry: eApgDirEntries.dir
    },
    {
        caption: "Cdn",
        title: "A personal content delivery network on deno deploy with simple cache management of common assets like style sheets, javascript, icons, images etc.",
        module: "Exposes a simple service that...",
        github: "https://github.com/Pangeli70/apg-cdn",
        microservice: "The microservice presents some pages th browse the available shared assets.",
        href: "https://apg-cdn.deno.dev/",
        released: "2022/10",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cdn/master/mod.ts",
        entry: eApgDirEntries.cdn
    },
    {
        caption: "Tng",
        title: "A template engine to produce static Server Side Rendered Html.",
        module: "",
        github: "",
        microservice: "",
        href: "https://apg-tng.deno.dev/",
        released: "2022/10",
        version: "0.9.6",
        import: "",
        entry: eApgDirEntries.tng
    },
    {
        caption: "Tst",
        title: "A web service useful to browse ApgUtsSpecable tests.",
        module: "",
        github: "",
        microservice: "",
        href: "https://apg-tst.deno.dev/",
        released: "2022/12",
        version: "0.9.6",
        import: "",
        entry: eApgDirEntries.tst
    },
    {
        caption: "Cad",
        title: "A minimalistic 2D cad engine to produce Server Side Rendered SVG and DXF drawings .",
        module: "",
        microservice: "",
        github: "",
        href: "https://apg-cad.deno.dev/",
        released: "2022/12",
        version: "0.9.6",
        import: "",
        entry: eApgDirEntries.cad
    },
    {
        caption: "Cii",
        title: "A Cad Instructions Interpreter that uses a headless 2D cad to produce SVG and DXF drawings .",
        module: "",
        github: "",
        microservice: "",
        href: "https://apg-cii.deno.dev/",
        released: "2023/01",
        version: "0.9.6",
        import: "",
        entry: eApgDirEntries.cii
    },
    {
        caption: "Dhe",
        title: "A component style engine to produce static Server Side Rendered Html.",
        module: "",
        github: "",
        microservice: "",
        href: "/",
        released: "",
        version: "0.9.6",
        import: "",
        entry: eApgDirEntries.dhe
    },
    {
        caption: "Lgr",
        title: "A series of tools to manage logging and performance measurements using Deno.",
        module: "",
        github: "",
        microservice: "",
        href: "/",
        released: "",
        version: "0.9.6",
        import: "",
        entry: eApgDirEntries.lgr
    },
    {
        caption: "Mng",
        title: "A series of tools to manage Mongo DB connections and operations.",
        module: "",
        github: "",
        microservice: "",
        href: "/",
        released: "",
        version: "0.9.6",
        import: "",
        entry: eApgDirEntries.mng
    },
    {
        caption: "Jsv",
        title: "A series of tools for Json validation through Json schemas.",
        module: "",
        microservice: "",
        github: "",
        href: "/",
        released: "",
        version: "0.9.6",
        import: "",
        entry: eApgDirEntries.jsv
    }
]