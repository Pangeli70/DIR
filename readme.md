# APG-DIR
<br>

Directory of APG modules on Github and microservices on Deno deploy

<br>
<br>

## Description
<br>

### Module
<br>

This TS module exposes the data for the identification of modules and microservices. 
> https://github.com/Pangeli70/apg-dir

<br>

### Microservice
<br>

The Drash microservice associated to this module is published on Deno Deploy and presents the directory as a simple broswsable list.
> https://apg-dir.deno.dev/

<br>

### First released
> 2022/10

<br>

### Current version:
> 0.9.6

<br>

## Usage

<br>

Import in deps.ts file using:
```Typescript
    export * as Dir from "https://raw.githubusercontent.com/Pangeli70/apg-dir/master/mod.ts";
```

The module exposes an enumeration for all the registered modules.
```Typescript
    Dir.eApgDirEntries
```

To get a unique local port for a development server for any of the APG ecosystem modules.

```Typescript
import { Dir, ... } from "./deps.ts";
...
const localPort = Dir.ApgDirGetLocalPort(Dir.eApgDirEntries.dir);
...
const server = new Drash.Server({
    hostname: '0.0.0.0',
    port: localPort,
    resources: [...],
    services: [...],
    protocol: "http"
});
server.run();
...
```

