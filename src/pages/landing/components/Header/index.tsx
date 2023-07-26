import { useMediaQuery } from '@/hooks/useMediaQuery'

import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'
import { TabletHeader } from './TabletHeader'

export function Header() {
  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 760px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1280px)')

  if (isMobile) {
    return <MobileHeader />
  }

  if (isTablet) {
    return <TabletHeader />
  }

  return <DesktopHeader />
}
