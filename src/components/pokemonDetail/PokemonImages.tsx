import { Image } from "@chakra-ui/react"

interface PokemonImagesProps {
  bigImage: string
  smallImages?: string[]
  altName: string
  showSmallImages?: boolean
}

export const PokemonImages = ({
  bigImage,
  smallImages,
  altName,
  showSmallImages = true,
}: PokemonImagesProps) => {
  return (
    <div>
      <Image
        src={bigImage}
        alt={altName}
        w="full"
        height={showSmallImages ? 380 : 180}
        className="bg-slate-700 rounded-lg shadow-lg"
      />
      {showSmallImages && smallImages && (
        <div className="grid grid-cols-4 gap-10 my-4">
          {smallImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={altName}
              w="full"
              height={90}
              className="bg-slate-700 rounded-lg shadow-lg"
            />
          ))}
        </div>
      )}
    </div>
  )
}
