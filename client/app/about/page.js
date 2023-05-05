import styles from '../styles/about.module.css'
import Navbar from '../../components/navbar'

const About = () => {
  return ( 
    <div className = {styles.bgcolor}>
        <Navbar/>
        <div>
          <title>Pantry | About</title>
          <h1 className = {styles.title}>About Our Vision</h1>
        </div>
        <div className = {styles.marginStyle}>
          <div className = {styles.paragraphStyle}>
              <img className = {styles.picl} src="https://cdn.discordapp.com/attachments/1030912487274598491/1096970853780029640/bd4224bdc0d7361c33324daba0c59b53.png" alt="React Image" />
              <h3 className = {styles.text}>{'\t'}900 million tons of food worldwide are wasted each year, according to a global survey conducted by the UN Environment Program (<a className = {styles.link} href="https://www.bbc.com/news/science-environment-56271385">reported by BBC</a>). 
              This is not only wasting valuable resources, but also contributing to environmental issues such as pollution and greenhouse gas emissions. As of 2021, around 830 
              million people around the world struggle with food security and hunger (<a className = {styles.link} href="https://www.who.int/news/item/06-07-2022-un-report--global-hunger-numbers-rose-to-as-many-as-828-million-in-2021">reported by the UN</a>). Reducing the rate of food waste would help to 
              alleviate this crisis and lessen the impact of food shortages.</h3>
          </div>
          <div className = {styles.paragraphStyle}>
          <img className = {styles.picr} src="https://cdn.discordapp.com/attachments/1030912487274598491/1096980408060608632/thumbnail_ZeroWaste.png" alt="React Image" />
          <h3>{'\t'}Around 60% of this waste comes from homes, often as a result of food expiration. This application, 'Pantry', allows users to minimize their food waste through expiration tracking and reminders. </h3>


          </div>

          <div className = {styles.paragraphStyle}>
          <h3>{'\t'}Use Pantry to track both perishable and nonperishable food, and keep track of what is available at any time with a free account. After adding items to different locations such as refrigerators and cabinets with an easy-to-use input interface, each one will appear in your personal 'Pantry'. Your food will be auto-sorted by expiration date, but can be sorted to search for other characteristics as well. </h3>

          </div>
          <div className = {styles.paragraphStyle}>

          <h3>{'\t'}The food expiration notification system, Pantry's most important feature, will send a reminder 2 days before a certain food is set to expire (based on the date the food was added). This timely reminder will make sure that all food can be used with minimal waste. Pantry will help you to make better use of food within a timely manner, and reduce the amount of waste due to food expiring unexpectedly.</h3>
          </div>
        </div>
      </div>
   );
}
 
export default About;