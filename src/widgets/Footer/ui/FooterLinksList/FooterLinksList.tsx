import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Typography } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import styles from "./FooterLinksList.module.scss"

interface ListItemType {
    id: string
    text: string
    path: string
}

interface LinksListItem {
    id?: string
    title: string
    list: ListItemType[]
}

interface LinksListProps {
    data: LinksListItem
    className?: string
}

export function FooterLinksList({ data, className }: LinksListProps) {
    const { title, list } = data
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography className={styles.title}>{t(title)}</Typography>
            <div className={styles.list}>
                {list.map(item => {
                    const { id, text, path } = item
                    return (
                        <AppLink key={id} to={path}>
                            {t(text)}
                        </AppLink>
                    )
                })}
            </div>
        </div>
    )
}
