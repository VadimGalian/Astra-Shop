import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchCategoryProducts } from "../services/fetchCategoryProducts/fetchCategoryProducts"
import { SubCategoryPageSchema } from "../types/subcategoryPageSchema"

const initialState: SubCategoryPageSchema = {
    products: [],
    isLoading: false,
    error: undefined,
    parent_category_id: 0,
    id: 0,
    name: "",
    _inited: false,
}

const subcategoryPageSlice = createSlice({
    name: "subcategoryPage",
    initialState,
    reducers: {
        initState: state => {
            state._inited = true
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategoryProducts.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchCategoryProducts.fulfilled,
                (state, action: PayloadAction<SubCategoryPageSchema>) => {
                    state.isLoading = false
                    state.products = action.payload.products
                    state.id = action.payload.id
                    state.parent_category_id = action.payload.parent_category_id
                    state.name = action.payload.name
                }
            )
            .addCase(
                fetchCategoryProducts.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false
                    state.error = action.payload
                }
            )
    },
})

export const { reducer: subcategoryPageReducer, actions: subcategoryPageActions } =
    subcategoryPageSlice
