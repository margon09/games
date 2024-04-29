import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
import useGameQueryStore from '../store'
import useWindowSize from '../hooks/useWindowSize'

const PlatformSelector = () => {
  const {width} = useWindowSize()
  const isMobile = width < 599

  const { data, error } = usePlatforms()

  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)


  const selectedPlatform = usePlatform(selectedPlatformId)

  if(error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        { selectedPlatform?.name || 'Platforms' }
      </MenuButton>
      <MenuList>
        {
          data?.results.map(platform => 
          <MenuItem 
            onClick={() => setSelectedPlatformId(platform.id)} 
            key={platform.id}>
              { isMobile ? platform.name.split(' ')[0] : platform.name }
          </MenuItem>)
        }
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector