import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { cache } from "react";

const endpoint = getRepositoryEndpoint("wade-rodgers-www");

export const client = createClient(endpoint);

export const getSettings = cache(async () => {
  return await client.getSingle("settings");
});

export const getSelectedWork = cache(async () => {
  return await client.getSingle("selected_works");
});

export const getAbout = cache(async () => {
  return await client.getSingle("about");
});

export const getStills = cache(async () => {
  return await client.getSingle("stills");
});
