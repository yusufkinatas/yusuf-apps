import { useCallback, useState } from 'react'

export const useConsecutive = <T extends string>() => {
  const [state, setState] = useState<{
    count: number
    last: T
  }>()

  const trackConsecutive = useCallback((value: T) => {
    setState(prevState => ({
      count: prevState?.last === value ? prevState.count + 1 : 1,
      last: value,
    }))
  }, [])

  return [state, trackConsecutive] as const
}
