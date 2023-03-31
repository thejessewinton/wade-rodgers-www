import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { cache } from "react";

const endpoint = getRepositoryEndpoint("wade-rodgers-www");

export const client = createClient(endpoint);

export const getSelectedWork = cache(async () => {
  return await client.getSingle("selected_works");
});
