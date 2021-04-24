import '../styles/global.scss';

import { Header } from '../components/Headers';
import { Player } from '../components/Play';

import styles from '../styles/app.module.scss'
import { PlayerContextProvider } from '../context/PlayContex';

function MyApp({ Component, pageProps }) {
  return (

    <PlayerContextProvider>
      <div className={styles.appWrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContextProvider>

  )
}

export default MyApp
