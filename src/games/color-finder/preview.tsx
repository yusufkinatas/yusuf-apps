import { times } from 'lodash'
import { Box, Grid } from 'theme-ui'

import { BOX_COUNT, GRID_WIDTH } from './constants'

const DIFFERENT_INDEX = 5

export const ColorFinderPreview = () => (
  <Grid
    sx={{
      gridTemplateColumns: `repeat(${GRID_WIDTH}, minmax(0, 1fr))`,
      gap: ['4px', 2],
    }}
  >
    {times(BOX_COUNT).map(i => (
      <Box
        key={i}
        sx={{
          aspectRatio: '1 / 1',
          borderRadius: ['6px', '12px'],
          backgroundColor: i === DIFFERENT_INDEX ? '#EA6C12' : 'primary',
        }}
      />
    ))}
  </Grid>
)
