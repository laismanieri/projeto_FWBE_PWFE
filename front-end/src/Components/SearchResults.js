function SearchResults(data){

    if(!data || data.length) return null;

    const resultList = data.map(({id, nome}) => {
        return (
            <li key={id}>
            <span>{nome}</span>
            </li>
        )
    });

    return (
        <> 
        <div>
            <ul>
                {resultList}
            </ul>
        </div> 
        </>
    )
}

export default SearchResults;