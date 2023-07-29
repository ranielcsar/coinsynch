import { useBreakpoints } from '@/hooks/useBreakpoints'

import { CardsGrid } from './CardsGrid'
import { MobileCards } from './MobileCards'

export function Cards() {
  const { isTablet, isDesktop } = useBreakpoints()

  if (isTablet || isDesktop) {
    return <CardsGrid />
  }

  return <MobileCards />
}
