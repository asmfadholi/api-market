module.exports = ({ env }) => ({
  // upload: {
  //     provider: 'google-cloud-storage',
  //     providerOptions: {
  //         bucketName: env('BUCKET_NAME'),
  //         publicFiles: false,
  //         uniform: false,
  //         basePath: '',
  //     },
  // },
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'mochammad.fadholi.st@gmail.com',
      defaultReplyTo: 'mochammad.fadholi.st@gmail.com',
    },
  },
});
