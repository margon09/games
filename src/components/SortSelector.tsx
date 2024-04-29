import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useGameQueryStore from "../store"
import useWindowSize from "../hooks/useWindowSize"

const SortSelector = () => {
  const {width} = useWindowSize()
  const isMobile = width < 599

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: isMobile ? 'Added' : 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label:  isMobile ? 'Released' : 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label:  isMobile ? 'Average' : 'Average rating' }
  ]

  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const setSortOrder = useGameQueryStore(s => s.setSortOrder)

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {!isMobile && 'Oder by: '} {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {
          sortOrders.map(order => 
            <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>
              {order.label}
            </MenuItem>)
        }
      </MenuList>
    </Menu>
  )
}

export default SortSelector