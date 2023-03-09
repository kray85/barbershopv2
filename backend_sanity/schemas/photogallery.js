export default {
    name: 'photoGallery',
    title: 'Photo Gallery',
    type: 'document',
    fields: [
      {
        name: 'photos',
        title: 'Photos',
        type: 'array',
        of: [
          {
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
              hotspot: true
            },
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                options: {
                  isHighlighted: true
                }
              }
            ]
          }
        ]
      }
    ]
  }
  