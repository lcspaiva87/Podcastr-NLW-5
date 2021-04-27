import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link'
import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import Head from 'next/head';

import { api } from '../services/api';
import { converteDurationToTimeString } from '../utils/convertDurationToTimeString';
import { usePlayer } from '../context/PlayContex';

import styles from './home.module.scss';
import SEO from '../components/Seo';



type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

type HomeProps = {
  latesEpisodes: Episode[];
  allEpisodes: Episode[];
}

export default function Home({ latesEpisodes, allEpisodes }: HomeProps) {

  const { playList } = usePlayer()

  const episodeList = [...latesEpisodes, ...allEpisodes];

  return (
    <div className={styles.homepage}>
      <SEO title="Home" description={'Olá eu sou a description'} />
      <Head>
        <title>Home | Podcastr</title>
      </Head>
      <section className={styles.latesEpisodes}>
        <h2>Ultimos Lançamentos</h2>
        <ul>
          {latesEpisodes.map((episode, index) => {
            return (
              <li key={episode.id}>
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />

                <div className={styles.episodeDetails}>
                  <Link href={`/episodes/${episode.id}`}>
                    <a >{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type="button" onClick={() => playList(episodeList, index)}>
                  <img src="/play-green.svg" alt="Tocar episode" />

                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className={styles.allEpisodes}>
        <h2>Todos episódios</h2>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <td style={{ width: 72 }} className={styles.Img} data-label="">
                    <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"

                    />
                  </td>
                  <td data-label="Title">
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </td>
                  <td className={styles.member} data-label="Members">{episode.members}</td>
                  <td data-label="Date" className={styles.date}>{episode.publishedAt}</td>
                  <td data-title="Duration" data-label="Duration">{episode.durationAsString}</td>
                  <td data-title="play" data-label="Play">
                    <button type="button" onClick={() => playList(episodeList, index + latesEpisodes.length)}>
                      <img src="/play-green.svg" alt="Tocar episódio" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'

    }
  })



  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBr }),
      duration: Number(episode.file.duration),
      durationAsString: converteDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url,
    }
  })
  const latesEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length)
  return {
    props: {
      latesEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }
}