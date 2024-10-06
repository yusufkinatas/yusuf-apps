import { Volume2, VolumeOff } from 'lucide-react'
import { Button } from 'theme-ui'

import { useSoundEffect } from '../utils/use-sound-effect'
import { useUserSettings } from '../utils/use-user-settings'

export const SoundButton = () => {
  const [settings, setSetting] = useUserSettings()
  const [playVolumeDown] = useSoundEffect('volumeDown', {
    soundEnabled: true,
    playbackRate: 1.5,
    volume: 2.5,
  })

  const [playVolumeUp] = useSoundEffect('volumeUp', {
    soundEnabled: true,
    playbackRate: 1.5,
    volume: 2.5,
  })

  return (
    <Button
      onClick={() => {
        if (settings.soundEnabled) {
          playVolumeDown()
        } else {
          playVolumeUp()
        }

        setSetting('soundEnabled', !settings.soundEnabled)
      }}
    >
      {settings.soundEnabled ? <Volume2 /> : <VolumeOff />}
    </Button>
  )
}
