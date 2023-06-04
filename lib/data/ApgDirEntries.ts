/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { eApgDirDeploys } from "../enums/eApgDirDeploys.ts";
import { eApgDirEntriesIds } from "../enums/eApgDirEntriesIds.ts";
import { IApgDirEntry } from "../interfaces/IApgDirEntry.ts";

const DIR_LOCAL_PORT = 9567;
const EDR_LOCAL_PORT = 6789;
const CDN_LOCAL_PORT = 4678;
const TNG_LOCAL_PORT = 4233;
const TST_LOCAL_PORT = 1332;
const CAD_LOCAL_PORT = 3455;
const CII_LOCAL_PORT = 7632;
const LGR_LOCAL_PORT = 3712;
const JSV_LOCAL_PORT = 5173;
const SEL_LOCAL_PORT = 4543;
const RPN_LOCAL_PORT = 5563;
const WGL_LOCAL_PORT = 4429;
const BOM_LOCAL_PORT = 7362;
const RGR_LOCAL_PORT = 7533;
const DOC_LOCAL_PORT = 6789;


/** 
 * Database of the current APG's modules directory
 * @Remark Since it is declared as a record of eApgDirEntriesIds is the 
 * TS transpiler that checks if all the entries are defined
 */
export const ApgDirEntries: Record<eApgDirEntriesIds, IApgDirEntry> = {

    // TODO @9 Maybe move these definitions in their own modules and then import entries from here -- APG 20230514

    [eApgDirEntriesIds.dir]: {
        id: eApgDirEntriesIds.dir,
        caption: "Apg-Dir",
        title: "Directory of the APG ecosystem",
        subTitle: "Lists the published libraries on Github and the published microservices on Deno deploy",
        version: "0.9.7",
        released: "2023/05/13",
        since: "2022/10",
        library: "Entities for the identification and the description of libraries and microservices.",
        github: "https://github.com/Pangeli70/apg-dir",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-dir/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Produces this website that presents the list as a browsable directory",
        localPort: DIR_LOCAL_PORT,
        deploy: "https://apg-dir.deno.dev/",
        srvDeps: [eApgDirEntriesIds.edr, eApgDirEntriesIds.tng, eApgDirDeploys.cdn_deploy],
    },


    [eApgDirEntriesIds.uts]: {
        id: eApgDirEntriesIds.uts,
        caption: "Apg-Uts",
        title: "Utility functions for the apg ecosystem",
        version: "0.9.7",
        released: "2023/05/13",
        since: "2018/06",
        library: "Helper entities (usually static methods) used to automate common simple operations on strings, numbers, conversions etc. ",
        github: "https://github.com/Pangeli70/apg-uts",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-uts/master/mod.ts",
        libDeps: [],
        microservice: "Not available",
    },


    [eApgDirEntriesIds.edr]: {
        id: eApgDirEntriesIds.edr,
        caption: "Apg-Edr",
        title: "Enhanced Drash Resources",
        version: "0.9.7",
        released: "2023/05/13",
        since: "2022/04",
        library: "Entities that extend the behaviours of basic Drash resources and services",
        github: "https://github.com/Pangeli70/apg-edr",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-edr/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts, eApgDirEntriesIds.lgr, eApgDirEntriesIds.rst],
        microservice: "Presents some pages to test the available features.",
        localPort: EDR_LOCAL_PORT,
        srvDeps: [eApgDirEntriesIds.dir, eApgDirEntriesIds.tng],
    },


    [eApgDirEntriesIds.cdn]: {
        id: eApgDirEntriesIds.cdn,
        caption: "Apg-Cdn",
        title: "Simple content delivery network",
        version: "0.9.7",
        released: "2023/05/13",
        since: "2022/10",
        library: "Exposes a service with a simple cache management to address and share common assets like style sheets, javascript, icons, images etc.",
        github: "https://github.com/Pangeli70/apg-cdn",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cdn/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Produces a website to browse the available shared assets to be used in other sites.",
        localPort: CDN_LOCAL_PORT,
        deploy: "https://apg-cdn.deno.dev/",
        srvDeps: [eApgDirEntriesIds.dir, eApgDirEntriesIds.edr, eApgDirEntriesIds.tng],
    },


    [eApgDirEntriesIds.tng]: {
        id: eApgDirEntriesIds.tng,
        caption: "Apg-Tng",
        title: "A template engine for SSR HTML",
        subTitle: "Produces dynamic Server Side Rendered documents",
        version: "0.9.6",
        released: "2023/02/..",
        since: "2022/10",
        library: "Exposes a configurable service with sophisticated caching strategies, that can use templates both from local and remote storages",
        github: "https://github.com/Pangeli70/apg-tng",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-tng/master/mod.ts",
        libDeps: [],
        microservice: "Produces a website for datailed help and usage pages, some diagnostic pages, and an API to deliver reusable and shared templates",
        localPort: TNG_LOCAL_PORT,
        deploy: "https://apg-tng.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.tst]: {
        id: eApgDirEntriesIds.tst,
        caption: "Apg-Tst",
        title: "Browser of ApgUtsSpecable tests.",
        library: "Exposes a service that stores in memory the incoming data of the test results and helps to present this data",
        version: "0.9.7",
        released: "2023/05/13",
        since: "2022/12",
        github: "https://github.com/Pangeli70/apg-tng",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-tst/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Produces a website to browse and analyze the results of the tests",
        localPort: TST_LOCAL_PORT,
        deploy: "https://apg-tst.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.svg]: {
        id: eApgDirEntriesIds.svg,
        caption: "Apg-Svg",
        title: "Server side rendered SVG",
        version: "0.9.6",
        released: "2023/04/..",
        since: "2022/12",
        library: "Exposes entities useful to create and manipulate SVG documents",
        github: "https://github.com/Pangeli70/apg-svg",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-svg/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Not available",
    },


    [eApgDirEntriesIds.cad]: {
        id: eApgDirEntriesIds.cad,
        caption: "Apg-Cad",
        title: "Headless Svg 2D cad engine",
        library: "A series of entities focused on 2D drawings with all the common features of a CAD",
        version: "0.9.6",
        released: "2023/04/..",
        since: "2022/12",
        github: "https://github.com/Pangeli70/apg-tng",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cad/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Presents a series of pages of the results of the tests of the SVG engine",
        localPort: CAD_LOCAL_PORT,
        deploy: "https://apg-cad.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.cii]: {
        caption: "Apg-Cii",
        id: eApgDirEntriesIds.cii,
        title: "A Cad Instructions Interpreter",
        subTitle: "Uses a headless 2D cad engine to produce SVG and DXF drawings.",
        version: "0.9.6",
        released: "2023/04/..",
        since: "2023/01",
        library: "A series of entities that can ",
        github: "https://github.com/Pangeli70/apg-cii",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-cii/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Presents a series of pages of the results of the tests of the instructions interpreter",
        localPort: CII_LOCAL_PORT,
        deploy: "https://apg-cii.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.lgr]: {
        id: eApgDirEntriesIds.lgr,
        caption: "Apg-Lgr",
        title: "Logging and performance operations",
        version: "0.9.6",
        released: "2023/04/..",
        since: "",
        library: "A series of entities to manage logging and profiling of code",
        github: "https://github.com/Pangeli70/apg-lgr",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-lgr/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Presents a series of pages to browse the stored logs, and an API to perform remote storage",
        localPort: LGR_LOCAL_PORT,
        deploy: "https://apg-lgr.deno.dev/",
        srvDeps: [],
    },

    // OK 2023/05/28 -----------------------
    [eApgDirEntriesIds.mng]: {
        id: eApgDirEntriesIds.mng,
        caption: "Apg-Mng",
        title: "Mongo DB connections and operations",
        version: "0.9.7",
        released: "2023/05/27",
        since: "2022/10",
        library: "A series of entities to use MongoDb on a local machine or MongoDB Atlas",
        github: "https://github.com/Pangeli70/apg-lgr",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-lgr/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts, eApgDirEntriesIds.rst],
        microservice: "Not available"
    },


    [eApgDirEntriesIds.maa]: {
        id: eApgDirEntriesIds.maa,
        caption: "Apg-Maa",
        title: "Mongo Api A... ",
        subTitle: "A series of tools to manage Mongo DB web operations.",
        version: "0.9.7",
        released: "2023/../..",
        since: "",
        library: "",
        github: "",
        import: "",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Not available",
    },

    // OK 2023/05/28 -----------------------
    [eApgDirEntriesIds.rst]: {
        id: eApgDirEntriesIds.rst,
        caption: "Apg-Rst",
        title: "Composite results management",
        version: "0.9.7",
        released: "2023/05/13",
        since: "2018/06",
        library: "Entities useful to manage composite returns from method results that can carry additional informations and payloads about processing or errors.",
        github: "https://github.com/Pangeli70/apg-rst",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-rst/master/mod.ts",
        libDeps: [eApgDirEntriesIds.uts],
        microservice: "Not available",
    },


    [eApgDirEntriesIds.a2d]: {
        id: eApgDirEntriesIds.a2d,
        caption: "Apg-A2D",
        title: "Bidimensional operations helpers ",
        version: "0.9.6",
        released: "2023/04/..",
        since: "",
        library: "Entities like points and lines that can be used for 2D operations",
        github: "https://github.com/Pangeli70/apg-a2d",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-a2d/master/mod.ts",
        libDeps: [],
        microservice: "Not available",
    },


    [eApgDirEntriesIds.ath]: {
        id: eApgDirEntriesIds.ath,
        caption: "Apg-Ath",
        title: "Authentication and Authorization ",
        version: "0.9.7",
        released: "2023/05/..",
        since: "2019/..",
        library: "Entities that allows to manage authentication through JWT API, and authorization to resources via users and roles management",
        github: "https://github.com/Pangeli70/apg-ath",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-ath/master/mod.ts",
        libDeps: [],
        microservice: "Not available",
    },

    [eApgDirEntriesIds.jsv]: {
        id: eApgDirEntriesIds.jsv,
        caption: "Apg-Jsv",
        title: "Json schema validation through AJV.",
        version: "0.9.6",
        released: "2023/04/..",
        since: "2020/..",
        library: "A series of entities for creation and storage of AJV validation functions",
        github: "https://github.com/Pangeli70/apg-jsv",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-jsv/master/mod.ts",
        libDeps: [],
        microservice: "Presents a series of pages to browse the stored schemas, and an API to perform remote validation",
        localPort: JSV_LOCAL_PORT,
        deploy: "https://apg-cii.deno.jsv/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.sel]: {
        id: eApgDirEntriesIds.sel,
        caption: "Apg-Sel",
        title: "Superenalotto",
        version: "0.9.6",
        released: "2022/11/..",
        since: "2022/..",
        library: "Entities to collect statistics about Sisal-Superenalotto gambling",
        github: "https://github.com/Pangeli70/apg-sel",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-sel/master/mod.ts",
        libDeps: [],
        microservice: "Present a series of pages to browse the statistics collected from the official site",
        localPort: SEL_LOCAL_PORT,
        deploy: "https://apg-sel.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.rpn]: {
        id: eApgDirEntriesIds.rpn,
        caption: "Apg-Rpn",
        title: "Reverse Polish Notation calculator",
        version: "0.9.6",
        released: "2022/04/..",
        since: "2022/..",
        library: "A parser and interpreter of methematic operations and complex calculations",
        github: "https://github.com/Pangeli70/apg-rpn",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-rpn/master/mod.ts",
        libDeps: [],
        microservice: "Presents a series of pages to explain how the calculator works",
        localPort: RPN_LOCAL_PORT,
        deploy: "https://apg-rpn.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.wgl]: {
        id: eApgDirEntriesIds.wgl,
        caption: "Apg-Wgl",
        title: "Server side Web GL builder",
        version: "0.9.6",
        released: "2023/04/..",
        since: "2022/12",
        library: "Entities to produce programmatically GLTF files on the server and deliver them to a browser",
        github: "https://github.com/Pangeli70/apg-wgl",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-wgl/master/mod.ts",
        libDeps: [],
        microservice: "",
        localPort: WGL_LOCAL_PORT,
        deploy: "https://apg-wgl.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.bom]: {
        id: eApgDirEntriesIds.bom,
        caption: "Apg-Bom",
        title: "Bill of materials processor",
        version: "0.9.6",
        released: "2023/04/..",
        since: "2022/12",
        library: "Entities that allow to manage the explosion of a parametric multilevel bill of materials",
        github: "https://github.com/Pangeli70/apg-bom",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-bom/master/mod.ts",
        libDeps: [],
        microservice: "Not yet available",
        localPort: BOM_LOCAL_PORT,
        deploy: "https://apg-bom.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.rgr]: {
        id: eApgDirEntriesIds.rgr,
        caption: "Apg-Rgr",
        title: "Regrassion calculator",
        version: "0.9.5",
        released: "2022/04/..",
        since: "2022/12",
        library: "Entities that allow to perform various types of regression analysis of series of data",
        github: "https://github.com/Pangeli70/apg-rgr",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-rgr/master/mod.ts",
        libDeps: [],
        microservice: "",
        localPort: RGR_LOCAL_PORT,
        deploy: "https://apg-rgr.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.doc]: {
        id: eApgDirEntriesIds.doc,
        caption: "Apg-Doc",
        title: "Docx conversion",
        subTitle: "Convert properly formatted documents into fully structured websites useful for technical documentation",
        version: "0.9.6",
        released: "2023/06/..",
        since: "2022/12",
        library: "Entitities that allows to convert docx files using vba into json data",
        github: "https://github.com/Pangeli70/apg-doc",
        import: "https://raw.githubusercontent.com/Pangeli70/apg-doc/master/mod.ts",
        libDeps: [],
        microservice: "A series of pages that use the json data obtained from the conversion of docx file into a fully structured website",
        localPort: DOC_LOCAL_PORT,
        deploy: "https://apg-doc.deno.dev/",
        srvDeps: [],
    },


    [eApgDirEntriesIds.dhe]: {
        id: eApgDirEntriesIds.dhe,
        caption: "Apg-Dhe",
        title: "A component style HTML engine ",
        version: "...",
        released: "...",
        since: "...",
        library: "Exposes entities useful to produce static Server Side Rendered Html.",
        github: "",
        import: "",
        libDeps: [],
        microservice: "Not available",
    },

    [eApgDirEntriesIds.mus]: {
        id: eApgDirEntriesIds.mus,
        caption: "Apg-Mus",
        title: "Values with measure units",
        version: "...",
        released: "...",
        since: "...",
        library: "Exposes entities useful to manage values with measure units and their conversions.",
        github: "",
        import: "",
        libDeps: [],
        microservice: "Not available",
    },
}