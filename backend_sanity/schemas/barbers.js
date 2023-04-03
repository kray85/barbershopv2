// barber.js

export default {
  name: 'barber',
  title: 'Barber',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    },
    {
      name: 'barberLink',
      title: 'Barber Link',
      type: 'url'
    },
    {
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'object',
          fields: [
            {
              name: 'link',
              title: 'Link',
              type: 'url'
            }
          ]
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'object',
          fields: [
            {
              name: 'link',
              title: 'Link',
              type: 'url'
            }
          ]
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'object',
          fields: [
            {
              name: 'link',
              title: 'Link',
              type: 'url'
            }
          ]
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'object',
          fields: [
            {
              name: 'link',
              title: 'Link',
              type: 'url'
            }
          ]
        }
      ]
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}]
        }
      ]
    }
  ]
}


