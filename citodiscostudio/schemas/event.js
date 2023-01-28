export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
     {
      name: 'Url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'addressUrl',
    //   title: 'Address URL',
    //   type: 'url',
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: 'startDate',
      title: 'Start Date/Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date/Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'title',
      // author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      // const {author} = selection
      return Object.assign({}, selection, {
        // subtitle: author && `by ${author}`,
      })
    },
  },
}
