import { AboutPage } from "pages/AboutPage"
import { CatalogPage } from "pages/CatalogPage"
import { SubCategoryPage } from "pages/SubCategoryPage"
import { ContactsPage } from "pages/ContactsPage"
import { DeliveryPage } from "pages/DeliveryPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { OrderPage } from "pages/OrderPage"
import { ProductDetailsPage } from "pages/ProductDetailsPage"
import { RouteProps } from "react-router-dom"
import { CategoryPage } from "pages/CategoryPage"
import { AppRoutes, RoutePath } from "./const"

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage />,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPage />,
    },
    [AppRoutes.DELIVERY]: {
        path: RoutePath.delivery,
        element: <DeliveryPage />,
    },
    [AppRoutes.ORDER]: {
        path: RoutePath.order,
        element: <OrderPage />,
    },
    [AppRoutes.CATEGORY]: {
        path: `${RoutePath.category}/:id`,
        element: <CategoryPage />,
    },
    [AppRoutes.SUB_CATEGORY]: {
        path: `${RoutePath.sub_category}/:id`,
        element: <SubCategoryPage />,
    },
    [AppRoutes.PRODUCT_DETAILS]: {
        path: `${RoutePath.product_details}/:id`,
        element: <ProductDetailsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
