import createReducer from "../../../utils/createReducer"

const schema = {
  name: 'shops',
  id: 'id'
}

const reducer = createReducer(schema.name)

export default reducer;