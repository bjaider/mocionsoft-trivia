import {categoryImage} from '../Media/CategoryImage'

const Categories = (category) => {
  const image = categoryImage.filter((image) => image.category === category)
  return image[0]?.image
}

export default Categories
