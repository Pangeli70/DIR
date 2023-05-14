# Apg-Dir Help

Ver. 0.9.7 - 2023/05/13
<br>

### Import the library in ```deps.ts``` of your project 

Using:
```Typescript
export * as Dir from "https://raw.githubusercontent.com/Pangeli70/apg-dir/master/mod.ts";
```

Import in your file using:
```Typescript
import { Dir, ... } from "[...PATH...]/deps.ts";
```

### The library exposes:

* An enumeration that identifies all registered APG modules.
```Typescript
Dir.eApgDirEntriesIds
```

* An interface for describing the those modules :
```Typescript
Dir.IApgDirEntry
```

* A data set as a record of those interfaces mapped per id:
```Typescript
Dir.ApgDirEntries: Record<eApgDirEntriesIds,IApgDirEntry >
```

* And a function to be used conveneiently to convert some data as Drash server info
```Typescript
const serverInfo = Dir.ApgDirGetServerInfo(Dir.eApgDirEntriesIds.dir);
```

### Usage

You can access the entries using the enumeration. Eg.
```Typescript
const dirEntry = Dir.IApgDirEntries[Dir.eApgDirEntriesIds.dir];
```

To initialize the Drash development server and get a different local port for any of the APG ecosystem libraries servers it is possible to use the following function.

```Typescript
import { Dir, Uts, ... } from "./deps.ts";
...

const serverInfo = Dir.ApgDirGetServerInfo(Dir.eApgDirEntries.dir);
...

const server = new Drash.Server({
    // This is compatible with Deno Deploy
    hostname: '0.0.0.0', 
    // This is ignored by Deno Deploy
    port: serverInfo.localPort,
    // Drash resources
    resources: [...],
    // Drash services
    services: [...],
    // Autamatically upgraded to https by Deno Deploy
    protocol: "http"
});

server.run();

Uts.ApgUtsServer.StartupResume(serverInfo);

```

To produce a standard markdowon page for the readme.md of evey module it is possible to use the following function.

```Typescript
import { Dir, Uts, ... } from "./deps.ts";
...
const id: Dir.eApgDirEntriesIds = ...;
const entry = Dir.ApgDirEntries[id];
const markdown = Dir.ApgDirMarkdownMaker.Convert(entry) ;
...
```

---

[Back to readme](../readme.md)