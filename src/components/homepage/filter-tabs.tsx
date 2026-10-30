import { Box, Button, Text } from 'theme-ui'

import { LinkCategory } from '../../links'

export type Filter = 'all' | LinkCategory

const options: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'game', label: 'Games' },
  { value: 'app', label: 'Apps' },
]

type FilterTabsProps = {
  value: Filter
  counts: Record<Filter, number>
  onChange: (value: Filter) => void
}

export const FilterTabs = ({ value, counts, onChange }: FilterTabsProps) => (
  <Box
    role="group"
    aria-label="Filter projects"
    sx={{
      display: ['grid', 'inline-flex'],
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 1,
      p: 1,
      borderRadius: 999,
      backgroundColor: 'surface',
      border: '1px solid',
      borderColor: 'border',
    }}
  >
    {options.map(option => {
      const isActive = option.value === value

      return (
        <Button
          key={option.value}
          variant="unstyled"
          aria-pressed={isActive}
          onClick={() => onChange(option.value)}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            height: 44,
            px: [0, '20px'],
            borderRadius: 999,
            backgroundColor: isActive ? 'text' : 'transparent',
            color: isActive ? 'background' : 'subtle',
            fontFamily: 'body',
            fontSize: 1,
            fontWeight: 600,
            transition: 'background-color 0.2s, color 0.2s',
            ':hover': { color: isActive ? 'background' : 'text' },
          }}
        >
          {option.label}
          <Text
            sx={{
              fontFamily: 'monospace',
              fontSize: 0,
              fontWeight: 500,
              color: isActive ? 'rgba(0, 0, 0, 0.55)' : 'muted',
            }}
          >
            {counts[option.value]}
          </Text>
        </Button>
      )
    })}
  </Box>
)
