import {defineType, defineField} from 'sanity'
//adding post
export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    //adding slug
    //slug is used to create url for each post
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', //slug will be generated from the title field
      },
    }),
    //adding excerpt field to the post schema
    //type: text is used to store long text data
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    //addng mainImage field to the post schema
    //type: image is used to store image data
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, //hotspot adds crop button to the image
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
    //adding author field
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}], //reference to the author schema
    }),
    //adding publishedAt
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
    }),

    //adding body
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block', //block is used to store rich text data
        },
      ],
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}], //reference to the category schema
      validation: (Rule) => Rule.min(1), //means at least one category should be selected for each post
    }),

    //adding reusable object to the post schema
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',

      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60), //meta title should not exceed 60 characters
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) => Rule.max(160), //meta description should not exceed 160 characters
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },

    prepare({title, media, publishedAt}) {
      return {
        title,
        media,
        subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Not published yet',
      }
    },
  },
})
