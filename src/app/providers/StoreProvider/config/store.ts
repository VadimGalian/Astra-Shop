import { configureStore } from "@reduxjs/toolkit"
import { changeLanguageReducer } from "features/ChangeLanguage"
import { catalogNavigationReducer } from "entities/CatalogNavigation"
import { modalsReducer } from "entities/ModalSlider"
import { productDetailsReducer } from "pages/ProductDetailsPage"
import { basketReducer } from "entities/Basket"
import { subcategoryPageReducer } from "pages/SubCategoryPage"
import { $api } from "shared/api/api"
import { filterProductsReducer } from "features/FilterProducts"
import { productCarouselReducer } from "widgets/ProductCarousel"
import { sortProductsReducer } from "features/SortProducts"
import { submitOrderReducer } from "features/SubmitOrder"
import { searchProductsReducer } from "features/SearchProduct"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            modals: modalsReducer,
            catalogNavigation: catalogNavigationReducer,
            subcategoryPage: subcategoryPageReducer,
            productDetails: productDetailsReducer,
            productCarousel: productCarouselReducer,
            filterProducts: filterProductsReducer,
            changeLanguage: changeLanguageReducer,
            searchProducts: searchProductsReducer,
            sortProducts: sortProductsReducer,
            submitOrder: submitOrderReducer,
            basket: basketReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }),
    })
}
