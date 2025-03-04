const config = {
  env: {
    imageKit: {
      publicKey: process.env.NEXT_IMAGEKIT_PUBLIC_KEY,
      urlEndPoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
      privateKey: process.env.NEXT_IMAGEKIT_PRIVATE_KEY,
    },
  },
}

export default config
