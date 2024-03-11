import contentful from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export interface Project {
  title: string;
  slug: string;
  date: string;
  description: string;
  media: object;
  thumbnail: object;
  content: Document;
  available: boolean;
  technologies: object;
  scope: object;
  link: URL;
  order: number;
  type: string;
}

export interface GalleryPost {
  fields: {
    internalName: string;
    scope: string;
    media: object;
    client: string;
    year: string;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});
