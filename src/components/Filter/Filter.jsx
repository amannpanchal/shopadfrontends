import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'

const Filter = ({
    setFilteredItems,
    allData,
    searchKeys
}) => {
    const [searchTerm, setSearchTerm] = useState("")

    const applyFilers = () => {

        const newFilterItems = allData.filter((item) => {
          
            const matchSearch = searchKeys?.some((key) => {
                return item[key]?.toLowerCase()?.includes(searchTerm.toLowerCase());
            })
            return matchSearch
        })
        console.log(newFilterItems)
        setFilteredItems(newFilterItems)
    }
    
    useEffect(() => {
        applyFilers()
    },[searchTerm])


    return (
        <div>
            <SearchBar
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}

            />
        </div>
    )
}

export default Filter