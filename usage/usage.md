# Apg-Dir Usage
<br>


The module exposes an enumeration for all the registered modules.
```Typescript
    Dir.eApgDirEntries
```

To get a different local port for a Drash development server for any of the APG ecosystem modules.

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

