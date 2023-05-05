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
          <h3 className = {styles.text}>{'\t'}Around 60% of this waste comes from homes, often as a result of food expiration. This application, 'Pantry', allows users to minimize their food waste through expiration tracking and reminder software. </h3>


          </div>

          <div className = {styles.paragraphStyle}>
          <h3 className = {styles.text}>{'\t'}Use Pantry to track both perishable and nonperishable food, and keep track of what is available at any time from the 'Food' tab. After adding items through an easy-to-use input interface, each one will appear in your personal Pantry. These items will be displayed below the food input field on the same page. Your food will be auto-sorted in order of when they were added, but can be sorted to search for other characteristics as well. To remove a food once it has been used, simply click on it in the list!</h3>
          <h3 className = {styles.text}>{'\t'}The food expiration display system, Pantry's most important feature, will show any foods set to expire within 2 days or less on the 'Home' page. This prominent reminder will make sure that all food can be used with minimal waste. Pantry will help you to make better use of food within a timely manner, and reduce the amount of waste due to food expiring unexpectedly.</h3>          </div>
        </div>
      </div>
   );
}
 
export default About;