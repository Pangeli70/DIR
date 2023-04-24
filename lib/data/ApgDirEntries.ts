/** -----------------------------------------------------------------------
 * @module [Dir/lib]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { eApgDirEntriesIds } from "../enums/eApgDirEntriesIds.ts";
import { IApgDirEntry } from "../interfaces/IApgDirEntry.ts";



/** Database of the current APG's modules directory */
export const ApgDirEntries: IApgDirEntry[] = [
    {
        id: eApgDirEntriesIds.dir,
        caption: "Apg-Dir",
        title: "Directory of the APG ecosystem",
        subTitle: "Libraries on Github and microservices on Deno deploy",
        library: "Exposes the entities for the identification and description of libraries and microservices.",
        github: "https://github.com/Pangeli70/apg-dir",
        microservice: "Produces a website that presents the list as a browsable directory.",
        href: "https://apg-dir.deno.dev/",
        released: "2022/10",
        version: "0.9.7",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-dir/master/mod.ts",
    },
    {
        id: eApgDirEntriesIds.cdn,
        caption: "Apg-Cdn",
        title: "A personal content delivery network on deno deploy ",
        library: "Exposes a service with a simple cache management to address common assets like style sheets, javascript, icons, images etc.",
        github: "https://github.com/Pangeli70/apg-cdn",
        microservice: "Produces a website to browse by type the available shared assets.",
        href: "https://apg-cdn.deno.dev/",
        released: "2022/10",
        version: "0.9.7",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cdn/master/mod.ts",
    },
    {
        id: eApgDirEntriesIds.tng,
        caption: "Apg-Tng",
        title: "A template engine for HTML",
        subTitle: "Produces dynamic Server Side Rendered documents",
        library: "Exposes a configurable service with sophisticated caching strategies, that can use templates both from local and remote storages",
        github: "https://github.com/Pangeli70/apg-tng",
        microservice: "Produces a website for datailed help and usage pages, some diagnostic pages, and an API to deliver reusable and shared templates",
        href: "https://apg-tng.deno.dev/",
        released: "2022/10",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-tng/master/mod.ts",
    },
    {
        id: eApgDirEntriesIds.tst,
        caption: "Apg-Tst",
        title: "Browser of the results of ApgUtsSpecable tests.",
        library: "Exposes a service that stores in memory the incoming data of the test results and helps to present this data",
        github: "https://github.com/Pangeli70/apg-tng",
        microservice: "Produces a website to browse and analyze the results of the tests",
        href: "https://apg-tst.deno.dev/",
        released: "2022/12",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-tst/master/mod.ts",
    },
    {
        id: eApgDirEntriesIds.cad,
        caption: "Apg-Cad",
        title: "A simple headless 2D cad engine to produce dynamic Server Side Rendered SVG and DXF drawings .",
        library: "A series of entities focused on 2D drawings with all the common features of a CAD",
        github: "https://github.com/Pangeli70/apg-tng",
        microservice: "Presents a series of pages of the results of the tests of the SVG engine",
        href: "https://apg-cad.deno.dev/",
        released: "2022/12",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cad/master/mod.ts",
    },
    {
        caption: "Apg-Cii",
        id: eApgDirEntriesIds.cii,
        title: "A Cad Instructions Interpreter that uses a headless 2D cad engine to produce SVG and DXF drawings.",
        library: "A series of entities that can ",
        github: "https://github.com/Pangeli70/apg-cii",
        microservice: "Presents a series of pages of the results of the tests of the instructions interpreter",
        href: "https://apg-cii.deno.dev/",
        released: "2023/01",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cii/master/mod.ts",
    },
    {
        id: eApgDirEntriesIds.dhe,
        caption: "Apg-Dhe",
        title: "A component style engine to produce static Server Side Rendered Html.",
        library: "",
        github: "",
        microservice: "",
        href: "/",
        released: "",
        version: "0.9.6",
        import: "",
    },
    {
        id: eApgDirEntriesIds.lgr,
        caption: "Apg-Lgr",
        title: "Logging and performance measurements using Deno.",
        library: "A series of entities to manage logging and profiling of code",
        github: "https://github.com/Pangeli70/apg-lgr",
        microservice: "Presents a series of pages to browse the stored logs, and an API to perform remote storage",
        href: "https://apg-lgr.deno.dev/",
        released: "",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-lgr/master/mod.ts",
    },
    {
        id: eApgDirEntriesIds.mng,
        caption: "Apg-Mng",
        title: "A series of tools to manage Mongo DB connections and operations.",
        library: "",
        github: "",
        microservice: "",
        href: "/",
        released: "",
        version: "0.9.6",
        import: "",
    },
    {
        id: eApgDirEntriesIds.jsv,
        caption: "Apg-Jsv",
        title: "Json schema validation through AJV.",
        library: "A series of entities for creation and storage of AJV validation functions",
        github: "https://github.com/Pangeli70/apg-jsv",
        microservice: "Presents a series of pages to browse the stored schemas, and an API to perform remote validation",
        href: "https://apg-cii.deno.jsv/",
        released: "",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-jsv/master/mod.ts",
    }
]