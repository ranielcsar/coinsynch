import { useBreakpoints } from '@/hooks/useBreakpoints'

import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'
import { TabletHeader } from './TabletHeader'

export function Header() {
  const { isMobile, isTablet } = useBreakpoints()

  if (isMobile) {
    return <MobileHeader />
  }

  if (isTablet) {
    return <TabletHeader />
  }

  return <DesktopHeader />
}
