var ImageKit = require("imagekit")

const handler = async (req, res) => {
  if (req.method == "POST") {
    var imagekit = new ImageKit({
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
    })
    const requestAsync = async () => {
      return await new Promise((resolve) => {
        imagekit.upload(
          {
            file: req.body.image, //required
            fileName: req.body.fileName, //required
            folder: "/fabrics",
            useUniqueFileName: false,
          },
          (error, result) => {
            resolve({ error, result })
          }
        )
      })
    }

    const r = await requestAsync()
    if (res.error) {
      res.status(500).json({ error: r.error })
    } else {
      res.status(200).json({ imageURL: r.result.filePath })
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" })
  }
}
export default handler
