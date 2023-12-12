import { ProductCard } from "entities/Product"
import { AsyncImage, ImageFit } from "shared/ui/AsyncImage"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { classNames } from "shared/lib/classNames/classNames"
import { useEffect, useState } from "react"
import { CompareProducts, AddProductToFavorite } from "features/productFeatures"
import { useDispatch, useSelector } from "react-redux"
import { fetchTopProducts } from "../../model/services/fetchTopProducts/fetchTopProducts"
import { getProductCarouselTopProducts } from "../../model/selectors/productCarouselSelector"
import styles from "./BannerWithProductsRow.module.scss"
import { IProductSwiperVariant, ProductsSwiper } from "../ProductsSwiper/ProductsSwiper"
import img from "../../const/categoryBanner.jpg"

interface IBannerWithProductsRowProps {
    className?: string
    id: number
}

export function BannerWithProductsRow(props: IBannerWithProductsRowProps) {
    const { className, id } = props
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        dispatch(fetchTopProducts())
    }, [dispatch])

    const topProducts = useSelector(getProductCarouselTopProducts)

    const title = "Category Products"

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography variant={TypographyVariant.H3} isBold className={styles.title}>
                {title}
            </Typography>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <AsyncImage src={img} alt="" objectFit={ImageFit.COVER} />
                </div>

                <div
                    className={styles.swiperContainer}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <ProductsSwiper
                        isLoading={false}
                        variant={IProductSwiperVariant.WITH_BANNER}
                        isWithPagination={isHovered}
                    >
                        {topProducts?.map(item => {
                            const { id, name, price, images, is_new: isNew } = item

                            return (
                                <ProductCard
                                    key={id}
                                    id={id}
                                    is_new={isNew}
                                    name={name}
                                    price={price}
                                    images={images}
                                    Basket={
                                        <ToggleProductInBasket
                                            variant={ToggleProductInBasketVariant.ICON}
                                            product={item}
                                        />
                                    }
                                    AddProductToFavorite={<AddProductToFavorite />}
                                    CompareProducts={<CompareProducts />}
                                    className={styles.product}
                                />
                            )
                        })}
                    </ProductsSwiper>
                </div>
            </div>
        </div>
    )
}
