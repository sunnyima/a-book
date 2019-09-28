export default function favorites(state=[], action){
	switch(action.type){
		case "PERSONS_FETCH_DATA_SUCCESS":
			return action.favorites;
		default:
			return state;
	}
}
