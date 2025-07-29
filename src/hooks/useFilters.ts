import { useState } from 'react'

interface Filters {
  branch: string
  technology: string
  program: string
  duration: string
  priceRange: string
}

export default function useFilters() {
  const [filters, setFilters] = useState<Filters>({
    branch: 'All',
    technology: 'All',
    program: 'All',
    duration: 'All',
    priceRange: 'All'
  })

  const updateFilter = (filterType: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }))
  }

  const clearFilters = () => {
    setFilters({
      branch: 'All',
      program: 'All',
      technology: 'All',
      duration: 'All',
      priceRange: 'All'
    })
  }

  return {
    filters,
    updateFilter,
    clearFilters
  }
}