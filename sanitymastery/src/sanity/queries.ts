export const postsQuery = `*[_type == "post"] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt
  }`
