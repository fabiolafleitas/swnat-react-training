import { useState } from 'react'
import taken from '../../assets/images/taken.svg'

const Image = ({
  imgSrc,
  altText
}) => {
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  const useFallback = failed || !imgSrc

  const source = useFallback ? taken : imgSrc
  const description = useFallback ? 'Donut monster taken' : altText

  const styles = {
    visibility: loading ? 'hidden' : 'visible',
    objectFit: useFallback ? 'contain' : 'cover',
  }

  const onImageLoadError = () => {
    setFailed(true)
  }

  const onLoadImage = () => {
    setLoading(false)
  }

  return (
    <img
      style={styles}
      src={source}
      alt={description}
      onError={onImageLoadError}
      onLoad={onLoadImage}
    />
  )
}

export default Image
