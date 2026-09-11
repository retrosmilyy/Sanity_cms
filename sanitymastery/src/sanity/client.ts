//connecting sanity to react app
import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "n0zowx6m",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2026-09-11",
})
