// sanity/schemas/schemaTypes/siteSettings.ts

const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Section Subtitle',
      type: 'text',
    },
  ],
};

export default siteSettings;
