import beforeRunApp from "./beforeRunApp";
import env from "./configs/env";

async function main() {
  await beforeRunApp();
  const app = require("./app").default;

  app.listen(env.server.PORT, () => {
    console.log(`╭───────────────────────────────────────╮`);
    console.log(`│                                       │`);
    console.log(`│   ` + "\x1b[32m" + "\x1b[1m" + `Express: ` + "\x1b[0m" + "\x1b[0m" + `@ v4.18.2                  │`);
    console.log(`│   ` + "\x1b[31m" + "\x1b[1m" + `Environment: ` + "\x1b[0m" + `dev                    │`);
    console.log(`│  \x1b[1m Listening: ` + "\x1b[0m" + "\x1b[34m" + `http://localhost:${4000}` + "\x1b[0m" + `    │`);
    console.log(`│                                       │`);
    console.log(`╰───────────────────────────────────────╯`);
  });
}

main();
