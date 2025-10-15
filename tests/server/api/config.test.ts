/**
 * Example test file for API endpoints
 * 
 * To run tests, you'll need to add vitest to the project:
 * npm install -D vitest @vitest/ui
 * 
 * Then add to package.json scripts:
 * "test": "vitest"
 * "test:ui": "vitest --ui"
 */

import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("Config API", async () => {
  await setup();

  it("should return config with public settings", async () => {
    const response = await $fetch("/api/config");
    
    expect(response).toHaveProperty("public");
    expect(response).toHaveProperty("hasPrivate");
    expect(typeof response.hasPrivate).toBe("boolean");
  });

  it("should include all required public config fields", async () => {
    const response = await $fetch("/api/config");
    
    expect(response.public).toHaveProperty("apiBase");
    expect(response.public).toHaveProperty("appTitle");
    expect(response.public).toHaveProperty("appDescription");
    expect(response.public).toHaveProperty("appVersion");
    expect(response.public).toHaveProperty("appAuthor");
  });
});

describe("Env Mode API", async () => {
  await setup();

  it("should return environment mode", async () => {
    const response = await $fetch("/api/env-mode");
    
    expect(response).toHaveProperty("NODE_ENV");
    expect(response).toHaveProperty("NUXT_ENV");
  });
});

describe("LS API", async () => {
  await setup();

  it("should return current working directory and files", async () => {
    const response = await $fetch("/api/ls");
    
    expect(response).toHaveProperty("cwd");
    expect(response).toHaveProperty("rootFiles");
    expect(Array.isArray(response.rootFiles)).toBe(true);
  });

  it("should include package.json in root files", async () => {
    const response = await $fetch("/api/ls");
    
    expect(response.rootFiles).toContain("package.json");
  });
});

// Note: /api/env endpoint should return 404 in production
describe("Env API (development only)", async () => {
  await setup();

  it("should return environment variables in development", async () => {
    // This test will fail in production, which is expected
    const response = await $fetch("/api/env");
    
    expect(response).toHaveProperty("NUXT_PUBLIC_API_BASE");
    expect(response).toHaveProperty("API_SECRET");
  });
});
