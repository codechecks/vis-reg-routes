import { join } from "path";

export interface UserProvidedOptions {
  collectionName?: string;
  buildPath: string;
  routes: string[];
}

export interface Options {
  collectionName: string;
  buildPath: string;
  routes: string[];
}

export function parseOptions(options: UserProvidedOptions, rootPath: string): Options {
  if (!options.collectionName) {
    throw new Error("Missing collectionName!");
  }
  if (!options.buildPath) {
    throw new Error("Missing buildPath!");
  }

  if (!options.routes) {
    throw new Error("Missing routes array!");
  }

  return {
    collectionName: options.collectionName,
    buildPath: join(rootPath, options.buildPath),
    routes: options.routes,
  };
}
