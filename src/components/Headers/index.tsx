import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss'

export function Header() {
    const currentDate = format(new Date(),'EEEEEE, d MMMM',{
        locale:ptBr,
    })
    return (

        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Logo Podcast" />
            <p>The best for you to hear, always</p>

            <span> {currentDate}</span>
        </header>
    )
}