import React from 'react'
import { Embed } from 'semantic-ui-react'

const EmbedExampleIframe = () => (
  <Embed
    autoplay={false}
    color='white'
    hd={false}
    id='gJscrxxl_Bg'
    iframe={{
      allowFullScreen: true,
      style: {
        padding: 10,
      },
    }}
    placeholder='/Images/im1.jpg'
    url='https://www.youtube.com/watch?v=1p7X67ucbYg&feature=youtu.be'
  />
)

export default EmbedExampleIframe