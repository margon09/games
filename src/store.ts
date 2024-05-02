import { create } from "zustand"

interface GameQuery {
  genreId?: number
  searchText?: string
  platformId?: number
  sortOrder?: string
}

interface GameQueryStore {
  gameQuery: GameQuery,
  filtersOpened: boolean,
  setSearchText: (searchText: string) => void
  setGenreId: (genreId: number) => void
  setPlatformId: (platformId: number) => void
  setSortOrder: (sortOrder: string) => void
  toggleFilters: () => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  filtersOpened: false,
  setSearchText: (searchText) => set(() => ({ gameQuery: {searchText} })),
  setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId} })),
  setPlatformId: (platformId) => set(store => ({ gameQuery: {...store.gameQuery, platformId} })),
  setSortOrder: (sortOrder) => set(store => ({ gameQuery: {...store.gameQuery, sortOrder} })),
  toggleFilters: () => set(state => ({ filtersOpened: !state.filtersOpened }))
}))

export default useGameQueryStore