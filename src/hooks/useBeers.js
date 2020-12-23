import { useQuery } from 'react-query'

const useBeers = () => {
    return useQuery('beers', () =>
     fetch('https://api.punkapi.com/v2/beers?page=1&per_page=6').then(res =>
       res.json()
     )
   )

}

export default useBeers
