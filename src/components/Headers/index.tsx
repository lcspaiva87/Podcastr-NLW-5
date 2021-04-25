import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';
import Link from 'next/link';


import { useTheme } from '../../context/ThemeContext';

import styles from './styles.module.scss'

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBr,
    })
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (

        <header className={styles.headerContainer}>
            <Link href="/" >
                <img className={styles.logo} src="/logo.svg" alt="Podcastr" />
            </Link>
            <p>The best for you to hear, always</p>

            <span> {currentDate}</span>
            <button type="button" onClick={toggleDarkMode} className={isDarkMode ? styles.dark : ''}>

                {isDarkMode
                    ? <img src="/half-moon.svg" alt="Tocar" />
                    : <img src="/sun.svg" alt="Trocar Tema" />

                }
            </button>
        </header>
    )
}
