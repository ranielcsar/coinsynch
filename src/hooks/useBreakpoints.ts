import { useMediaQuery } from './useMediaQuery'

export function useBreakpoints() {
  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 760px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1280px)')
  const isDesktop = useMediaQuery('(min-width: 1280px)')

  return { isMobile, isTablet, isDesktop }
}