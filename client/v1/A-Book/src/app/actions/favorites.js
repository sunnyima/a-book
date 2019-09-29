export function personFetchDataSuccess(favorites){
	return{
		type: "PERSONS_FETCH_DATA_SUCCESS",
		favorites
	}
}

export function personFetchData(url){
	return (dispatch)=>{
		fetch(url)
			.then(response =>{
				if(!response.ok) {
					throw new Error(response.statusText)
				}
			return response;
		})
		.then(response=> response.json())
		.then(favorites => dispatch(personFetchDataSuccess(favorites)))
	}
}
