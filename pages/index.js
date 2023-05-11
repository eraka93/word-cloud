import { useState } from 'react'
import Head from 'next/head'
import { Switch } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons'

import styles from '../styles/Home.module.css'

import Details from '../components/Details';
import ListTopics from '../components/ListTopics'


export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [modeCloud, setModeCloud] = useState('tag')

  const onChange = () => {
    setModeCloud(modeCloud == 'tag' ? 'word' : 'tag')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge</title>
        <meta name="description" content="Test assignment for Frontend developer position" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          My Topics Challenge
        </h1>

        <Switch onChange={onChange} defaultChecked unCheckedChildren={'WORD-CLOUD'} checkedChildren={'TAG-CLOUD'} />

        <div className={styles.content}>
          <ListTopics selectedID={selectedTopic.id} setSelectedTopic={setSelectedTopic} mode={modeCloud} />
          <Details selectedTopic={selectedTopic} />
        </div>

      </main>

      <footer className={styles.footer}>

        <a
          href="https://www.linkedin.com/in/milan-erakovic-910486236/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Milan Erakovic
        </a>
        <LinkedinOutlined />
      </footer>
    </div>
  )
}
