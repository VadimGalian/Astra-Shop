import { AxiosInstance } from "axios"
import { BasketSchema } from "entities/Basket"
import { CatalogNavigationSchema } from "entities/CatalogNavigation"
import { ModalsSchema } from "entities/ModalSlider"
import { ChangeLanguageSchema } from "features/ChangeLanguage"
import { FilterProductsSchema } from "features/FilterProducts/model/types/filterProductsSchema"
import { SearchProductsSchema } from "features/SearchProduct"
import { SortProductsSchema } from "features/SortProducts"
import { SubmitOrderSchema } from "features/SubmitOrder"
import { ProductDetailsSchema } from "pages/ProductDetailsPage"
import { SubCategoryPageSchema } from "pages/SubCategoryPage"
import { ProductCarouselSchema } from "widgets/ProductCarousel"

export interface StateSchema {
    modals: ModalsSchema
    catalogNavigation: CatalogNavigationSchema
    subcategoryPage: SubCategoryPageSchema
    productDetails: ProductDetailsSchema
    productCarousel: ProductCarouselSchema
    filterProducts: FilterProductsSchema
    changeLanguage: ChangeLanguageSchema
    searchProducts: SearchProductsSchema
    sortProducts: SortProductsSchema
    submitOrder: SubmitOrderSchema
    basket: BasketSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
