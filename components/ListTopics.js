import WordCloud from 'react-d3-cloud'
import { scaleLinear } from 'd3-scale'
import { TagCloud } from 'react-tagcloud'

import topicsData from '../public/topics.json'
import styles from '../styles/Home.module.css'

const ListTopics = ({ selectedID, setSelectedTopic, mode }) => {
   const topics = topicsData.topics

   const data = topics.map((topic) => ({
      text: topic.label,
      value: topic.volume,
      sentimentScore: topic.sentimentScore,
      topic: topic
   }));

   const data2 = topics.map((topic) => ({
      value: topic.label,
      count: topic.volume,
      topic: topic
   }))

   const getColor = (sentimentScore) => {
      return sentimentScore > 60 ? "#2ca02c" : sentimentScore < 40 ? "#d62728" : "#7f7f7f"
   }

   const fontSizes = [18, 20, 24, 36, 48, 50]
   const minVolume = Math.min(...topics.map(topic => topic.volume))
   const maxVolume = Math.max(...topics.map(topic => topic.volume))

   const fontSizeScale = scaleLinear()
      .domain([minVolume, maxVolume])
      .range([0, fontSizes.length - 1])
      .clamp(true);

   const getFontSize = (volume) => {
      const fontSizeIndex = Math.floor(fontSizeScale(volume));
      return fontSizes[fontSizeIndex];
   }

   const customRenderer = (tag) => {
      const color = tag.topic.sentimentScore > 60 ? "#2ca02c" : tag.topic.sentimentScore < 40 ? "#d62728" : "#7f7f7f"
      const fontSize = getFontSize(tag.count)
      return (
         <span style={{ color: color, fontSize: fontSize, padding: 10, cursor: 'pointer', textDecorationLine: selectedID == tag.topic.id ? 'underline' : 'none' }}>{tag.value}</span>
      )
   }

   return (
      <div className={styles.topics}>
         {mode == 'tag' &&
            <TagCloud
               maxSize={fontSizes[5]}
               minSize={fontSizes[0]}
               tags={data2}
               onClick={(tag) => {
                  setSelectedTopic(tag.topic)
               }}
               renderer={customRenderer}
            />}
         {mode == 'word' &&
            <WordCloud
               data={data}
               font={'Segoe UI'}
               rotate={0}
               fontSize={(word) => getFontSize(word.value)}
               fill={(word) => getColor(word.sentimentScore)}
               padding={20}
               onWordClick={(event, d) => {
                  setSelectedTopic(d.topic)
               }}
            />}
      </div>
   )
}

export default ListTopics 