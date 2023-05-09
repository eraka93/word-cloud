import topicsData from '../public/topics.json'
import styles from '../styles/Home.module.css'

const ListTopics = ({ setSelectedTopic }) => {
   const topics = topicsData.topics
   return (
      <div className={styles.topics}>
         {
            topics.map((topic) => (
               <div
                  className={styles.topic}
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  style={{ color: topic.sentimentScore > 60 ? 'green' : topic.sentimentScore < 40 ? 'red' : 'gray' }}>
                  {topic.label}
               </div>
            ))
         }
      </div>
   )
}

export default ListTopics 