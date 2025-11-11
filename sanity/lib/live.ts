import { defineLive } from "next-sanity/live";
import { client } from './client'

// For server-side token (optional, for draft content and real-time updates)
const serverToken = process.env.SANITY_API_TOKEN || false;

// For client-side token (optional)
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN || false;
if (!token) {
  throw new Error("Missing Sanity API token. ");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token, // This enables draft content and real-time updates
  browserToken: token, 
  fetchOptions:{
    revalidate: 0,
  }// This enables client-side real-time updates
});