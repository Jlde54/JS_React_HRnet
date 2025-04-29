import { useState, useMemo } from 'react'
import styles from '../styles/dataList.module.scss'

function DataList({
  data = [],
  columns = [],
  title = "Data Table",
  noDataText = "No data found.",
  entriesOptions = [],
  }) 
{

  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState({ key: null, direction: 'asc' })

  const filteredData = useMemo(() => {
    return data.filter(empl => {
      const values = Object.values(empl).join(' ').toLowerCase()
      return values.includes(search.toLowerCase())
    })
  }, [data, search])

  const sortedData = useMemo(() => {
    let sortableData = [...filteredData]
    if (sortParam.key) {
      sortableData.sort((a, b) => {
        const aValue = a[sortParam.key] || ''
        const bValue = b[sortParam.key] || ''
        if (aValue < bValue) {
          return sortParam.direction === 'asc' ? -1 : 1
        }
        if (aValue > bValue) {
          return sortParam.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }
    return sortableData
  }, [filteredData, sortParam])
    
  const totalPages = Math.ceil(filteredData.length / entries)
  
  const paginatedData = sortedData.slice(
    (currentPage - 1) * entries,
    currentPage * entries
  )

  const handleEntriesChange = (e) => {
    setEntries(Number(e.target.value))
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setCurrentPage(1)
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1)
  }

  const requestSort = (key) => {
    let direction = 'asc'
    if (sortParam.key === key && sortParam.direction === 'asc') {
      direction = 'desc'
    }
    setSortParam({ key, direction })
  }

  const startIndex = (currentPage - 1) * entries + 1
  const endIndex = Math.min(startIndex + entries - 1, filteredData.length)

  return (
    <div className={styles.dataList}>
      <h2 className={styles.dataList__title}>{title}</h2>

      <div className={styles.dataList__controls}>
        <label htmlFor="entries">
          Show&nbsp;
          <select id="entries" value={entries} onChange={handleEntriesChange}>
            {entriesOptions.map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          &nbsp;entries
        </label>

        <label htmlFor="search">
          Search:&nbsp;
          <input
            type="text"
            id="search" 
            value={search}
            onChange={handleSearchChange}
            className={styles.dataList__searchInput}
          />
        </label>
      </div>

      {filteredData.length === 0 ? (
        <p className={styles.dataList__empty}>{noDataText}</p>
      ) : (
        <>
          <div className={styles.dataList__tableWrapper}>
            <table className={styles.dataList__table}>
              <thead>
                <tr>
                {columns.map(col => (
                    <th key={col.property}>{col.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={index}>
                    {columns.map(col => (
                      <td key={col.property}>
                        {item[col.property] || '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.dataList__footer}>
            <span>
              Showing {startIndex} to {endIndex} of {filteredData.length} entries
            </span>
            <div className={styles.dataList__pagination}>
              <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
              <span className={styles.dataList__pageNumber}> {currentPage} </span>
              <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DataList