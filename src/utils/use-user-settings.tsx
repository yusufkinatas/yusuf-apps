import { useLocalStorage } from '@uidotdev/usehooks'

type UserSettings = {
  soundEnabled: boolean
}

const defaultUserSettings: UserSettings = {
  soundEnabled: true,
}

export const useUserSettings = () => {
  const [settings, setSettings] = useLocalStorage<UserSettings>(
    'user-settings',
    defaultUserSettings
  )

  const setSetting = <T extends keyof UserSettings>(key: T, value: UserSettings[T]) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value,
    }))
  }

  return [settings, setSetting] as const
}
