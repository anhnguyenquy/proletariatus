export const pageCreationFormDefaultValue = {
  'page-identity': {
    name: '',
    url: '',
    website: ''
  },
  location: {
    headquarter: {
      country: '',
      'city/province': '',
      street: '',
    },
    addresses: [
      {
        country: '',
        'city/province': '',
        street: '',
      },
      {
        country: '',
        'city/province': '',
        street: '',
      }
    ]
  },
  contacts: [
    {
      email: '',
      phone: '',
      description: '',
    },
    {
      email: '',
      phone: '',
      description: '',
    }
  ],
  'profile-details': {
    description: '',
    industry: '',
    logo: null,
    cover: null,
    about: ''
  }
}