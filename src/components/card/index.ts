import { Card } from "./Card"
import { CardButtons } from "./CardButtons"
import { CardImage } from "./CardImage"

export const PokeCard = Object.assign(Card, {
  Image: CardImage,
  Buttons: CardButtons,
})
