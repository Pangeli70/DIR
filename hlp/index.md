# Apg-Dir Help
<br>

Import the library in deps.ts of your project using:
```Typescript
export * as Dir from "https://raw.githubusercontent.com/Pangeli70/apg-dir/master/mod.ts";
```

Import in your file using:
```Typescript
import { Dir, ... } from "[...PATH...]/deps.ts";
```

The library exposes an enumeration that identifies all registered modules.
```Typescript
    Dir.eApgDirEntriesIds
```

An interface for describing the libraries :
```Typescript
    Dir.IApgDirEntry
```

And a data set as an array of entries:
```Typescript
    Dir.ApgDirEntries
```

You can access the entries using the enumeration. Eg.
```Typescript
    const dirEntry = Dir.IApgDirEntries[Dir..eApgDirEntriesIds.dir];
```

To initialize the Drash development server and get a different local port for any of the APG ecosystem libraries servers it is possible to use the following function.

```Typescript
import { Dir, Uts, ... } from "./deps.ts";
...

const SERVER_INFO = Dir.ApgDirGetServerInfo(Dir.eApgDirEntries.dir);
...

const server = new Drash.Server({
    // This is compatible with Deno Deploy
    hostname: '0.0.0.0', 
    // This is ignored by Deno Deploy
    port: SERVER_INFO.localPort,
    // Drash resources
    resources: [...],
    // Drash services
    services: [...],
    // Autamatically upgraded to https by Deno Deploy
    protocol: "http"
});

server.run();

Uts.ApgUtsServer.StartupResume(SERVER_INFO);

```

[Back to readme](../readme.md)