import { readdirSync } from "node:fs";

// chekcing the bare-root files for existing .env files
export default defineEventHandler(() => ({
  cwd: process.cwd(),
  rootFiles: readdirSync(process.cwd()),
}));
