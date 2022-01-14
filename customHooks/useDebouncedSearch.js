import React, {useState} from 'react'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import useConstant from 'use-constant'
import { useAsync } from 'react-async-hook';


const useDebouncedSearch = (searchFunction) => {

    const [inputText, setInputText] = useState('')
  
    const debouncedSearchFunction = useConstant(() =>
      AwesomeDebouncePromise(searchFunction, 300)
    )
  
    const searchResults = useAsync(
      async () => {
        if (inputText.length === 0) {
          return [];
        } else {
          return debouncedSearchFunction(inputText);
        }
      },
      [debouncedSearchFunction, inputText]
    )
  
    return {
      inputText,
      setInputText,
      searchResults,
    }
}

export default useDebouncedSearch