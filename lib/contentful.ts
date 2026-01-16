import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export const contentfulClient = space && accessToken
    ? createClient({ space, accessToken })
    : null as any;
