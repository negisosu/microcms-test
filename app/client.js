import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: 'edk94vmp89',
    apiKey: process.env.API_KEY,
});