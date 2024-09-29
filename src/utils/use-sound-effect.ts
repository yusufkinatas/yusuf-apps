import useSound from 'use-sound'

import gameOver from './use-sound-effect/game-over.mp3'
import gil from './use-sound-effect/gil.mp3'
import juut from './use-sound-effect/juut.mp3'
import victory from './use-sound-effect/victory.mp3'
import volumeDown from './use-sound-effect/volume-down.mp3'
import volumeUp from './use-sound-effect/volume-up.mp3'
import { useUserSettings } from './use-user-settings'

const soundFiles = {
  juut,
  gil,
  volumeDown,
  volumeUp,
  gameOver,
  victory,
} as const

export const useSoundEffect = (
  name: keyof typeof soundFiles,
  options?: Parameters<typeof useSound>[1]
): ReturnType<typeof useSound> => {
  const [{ soundEnabled }] = useUserSettings()

  return useSound(soundFiles[name], {
    soundEnabled,
    ...options,
  })
}
