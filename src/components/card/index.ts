import { Card } from "./Card"
import { CardButtons } from "./CardButtons"
import { CardImage } from "./CardImage"
import { CardTitle } from "./CardTitle"

export const PokeCard = Object.assign(Card, {
  Buttons: CardButtons,
  Image: CardImage,
  Title: CardTitle,
})
