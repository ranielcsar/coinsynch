import { useMediaQuery } from '@/hooks/useMediaQuery'

import { CardsGrid } from './CardsGrid'
import { MobileCards } from './MobileCards'

export function Cards() {
  const isTablet = useMediaQuery('(min-width: 768px)')

  if (isTablet) {
    return <CardsGrid />
  }

  return <MobileCards />
}
