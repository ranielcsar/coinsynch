import { useMediaQuery } from '@/hooks/useMediaQuery'

import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'
import { TabletHeader } from './TabletHeader'

export function Header() {
  const isDesktop = useMediaQuery('(min-width: 1280px)')
  const isTablet = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return <DesktopHeader />
  }

  if (isTablet) {
    return <TabletHeader />
  }

  return <MobileHeader />
}
