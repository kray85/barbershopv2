import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID
const dataset = process.env.REACT_APP_SANITY_DATASET

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-01-01',
  useCdn: true,
  
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
