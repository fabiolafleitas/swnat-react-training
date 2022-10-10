import { useState } from 'react'
import taken from '../../assets/images/taken.svg'

const getFallBackImageSrc = (selection) => {
  switch(selection) {
    case 'taken':
      return taken
    default:
      return taken
  }
}

const Image = ({ 
  imgSrc, 
  altText, 
  fallbackImg = 'taken', 
  altTextFallback = 'Donut monster taken' }) => {
    const [loading, setLoading] = useState(true)
    const [failed, setFailed] = useState(false)

    const useFallback = failed || !imgSrc

    const source = useFallback ? getFallBackImageSrc(fallbackImg) : imgSrc
    const description = useFallback ? altTextFallback : altText
     
    const styles = {
      visibility: loading ? 'hidden' : 'visible',
      objectFit: useFallback ? 'contain' : 'cover'
    }

    const onImageLoadError = () => {
      setFailed(true)
    }

    const onLoadImage = () => {
      setLoading(false)
    }

    return (
      <img style={styles} src={source} alt={description} onError={onImageLoadError} onLoad={onLoadImage}/>
    )
}

export default Image