import { readdirSync } from "node:fs";
import type { LsResponse } from "~/types/api";

/**
 * Lists files in the project root directory
 * Useful for checking the existence of .env files during development
 */
export default defineEventHandler((): LsResponse => {
  try {
    const cwd = process.cwd();
    const rootFiles = readdirSync(cwd);

    return {
      cwd,
      rootFiles,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to read directory",
      data: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
