// import env from "./configs/env";
import beforeRunApp from "./beforeRunApp";

async function main() {
  await beforeRunApp();
  const app = require("./app").default;

  app.listen(4000, () => {
    //env.server.PORT
    console.log("SERVER RUN AT " + 4000);
  });
}

main();
