/* eslint-disable react/no-unescaped-entities */
import topicsData from '../public/topics.json'
import styles from '../styles/Home.module.css'

const Details = ({ selectedTopic }) => {
   const { label, sentiment } = selectedTopic
   const sum = (sentiment?.negative ?? 0) + (sentiment?.positive ?? 0) + (sentiment?.neutral ?? 0)

   return (
      <div className={styles.details}>
         <p>Information on topic "{label}":</p>
         <p>Total Mentions: {sum}</p>
         <div>Postive Mentions: <span style={{ color: 'green' }}>{sentiment?.positive ?? 0}</span></div>
         <div>Neutral Mentions: {sentiment?.neutral ?? 0}</div>
         <div>Negative Mentions: <span style={{ color: 'red' }}>{sentiment?.negative ?? 0}</span></div>
      </div>
   )
}

export default Details 