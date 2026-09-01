import { app } from "./app.js";
import { env } from "./env.js";

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port} in ${env.nodeEnv} mode`);
});
