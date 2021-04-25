import '../styles/global.scss';

import { Header } from '../components/Headers';
import { Player } from '../components/Play';

import styles from '../styles/app.module.scss'
import { PlayerContextProvider } from '../context/PlayContex';
import { ThemeDarkContexProvider } from '../context/ThemeDarkCOntex';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeDarkContexProvider>
      <PlayerContextProvider>
        <div className={styles.appWrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </ThemeDarkContexProvider>

  )
}

export default MyApp
