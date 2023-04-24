/** -----------------------------------------------------------------------
 * @module [Dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * -----------------------------------------------------------------------
 */

import { eApgDirEntriesIds } from "../enums/eApgDirEntriesIds.ts";
import { IApgDirEntry } from "../interfaces/IApgDirEntry.ts";



/** Database of the current APG's modules directory */
export const ApgDirEntries: IApgDirEntry[] = [
    {
        entry: eApgDirEntriesIds.dir,
        caption: "Apg-Dir",
        title: "Directory of the APG ecosystem of libraries",
        subTitle: "Modules on Github and microservices on Deno deploy",
        module: "Exposes the entities for the identification of modules and microservices.",
        github: "https://github.com/Pangeli70/apg-dir",
        microservice: "Produces a website that presents the list as a browsable directory.",
        href: "https://apg-dir.deno.dev/",
        released: "2022/10",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-dir/master/mod.ts",
    },
    {
        entry: eApgDirEntriesIds.cdn,
        caption: "Apg-Cdn",
        title: "A personal content delivery network on deno deploy ",
        module: "Exposes a service that with a simple cache management of common assets like style sheets, javascript, icons, images etc.",
        github: "https://github.com/Pangeli70/apg-cdn",
        microservice: "Produces a website to browse by type the available shared assets.",
        href: "https://apg-cdn.deno.dev/",
        released: "2022/10",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cdn/master/mod.ts",
    },
    {
        entry: eApgDirEntriesIds.tng,
        caption: "Apg-Tng",
        title: "A template engine for HTML",
        subTitle: "Produces dynamic Server Side Rendered documents",
        module: "Exposes a configurable service with sophisticated caching strategies, that can use templates both from local and remote storages",
        github: "https://github.com/Pangeli70/apg-tng",
        microservice: "Produces a website for datailed help and usage pages, some diagnostic pages, and an API to deliver reusable and shared templates",
        href: "https://apg-tng.deno.dev/",
        released: "2022/10",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-tng/master/mod.ts",
    },
    {
        entry: eApgDirEntriesIds.tst,
        caption: "Apg-Tst",
        title: "Browser of the results of ApgUtsSpecable tests.",
        module: "Exposes a service that stores in memory the incoming data of the test results and helps to present this data",
        github: "https://github.com/Pangeli70/apg-tng",
        microservice: "Produces a website to browse and analyze the results of the tests",
        href: "https://apg-tst.deno.dev/",
        released: "2022/12",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-tst/master/mod.ts",
    },
    {
        entry: eApgDirEntriesIds.cad,
        caption: "Apg-Cad",
        title: "A simple headless 2D cad engine to produce dynamic Server Side Rendered SVG and DXF drawings .",
        module: "A series of entities focused on 2D drawings with all the common features of a CAD",
        github: "https://github.com/Pangeli70/apg-tng",
        microservice: "Presents a series of pages of the results of the tests of the SVG engine",
        href: "https://apg-cad.deno.dev/",
        released: "2022/12",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cad/master/mod.ts",
    },
    {
        caption: "Apg-Cii",
        entry: eApgDirEntriesIds.cii,
        title: "A Cad Instructions Interpreter that uses a headless 2D cad engine to produce SVG and DXF drawings.",
        module: "A series of entities that can ",
        github: "https://github.com/Pangeli70/apg-cii",
        microservice: "Presents a series of pages of the results of the tests of the instructions interpreter",
        href: "https://apg-cii.deno.dev/",
        released: "2023/01",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cii/master/mod.ts",
    },
    {
        entry: eApgDirEntriesIds.dhe,
        caption: "Apg-Dhe",
        title: "A component style engine to produce static Server Side Rendered Html.",
        module: "",
        github: "",
        microservice: "",
        href: "/",
        released: "",
        version: "0.9.6",
        import: "",
    },
    {
        entry: eApgDirEntriesIds.lgr,
        caption: "Apg-Lgr",
        title: "Logging and performance measurements using Deno.",
        module: "A series of entities to manage logging and profiling of code",
        github: "https://github.com/Pangeli70/apg-lgr",
        microservice: "Presents a series of pages to browse the stored logs, and an API to perform remote storage",
        href: "https://apg-lgr.deno.dev/",
        released: "",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-lgr/master/mod.ts",
    },
    {
        entry: eApgDirEntriesIds.mng,
        caption: "Apg-Mng",
        title: "A series of tools to manage Mongo DB connections and operations.",
        module: "",
        github: "",
        microservice: "",
        href: "/",
        released: "",
        version: "0.9.6",
        import: "",
    },
    {
        entry: eApgDirEntriesIds.jsv,
        caption: "Apg-Jsv",
        title: "Json schema validation through AJV.",
        module: "A series of entities for creation and storage of AJV validation functions",
        github: "https://github.com/Pangeli70/apg-jsv",
        microservice: "Presents a series of pages to browse the stored schemas, and an API to perform remote validation",
        href: "https://apg-cii.deno.jsv/",
        released: "",
        version: "0.9.6",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-jsv/master/mod.ts",
    }
]