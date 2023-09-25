import { useContext, useState } from "react";
import { activitiesData } from '../data/activities';
import DarkModeContext from "../DarkModeContext";

const Activities = () => {
  const { darkMode } = useContext(DarkModeContext);
  
  const getRandomActivity = () => {
    const randomIndex = Math.floor(Math.random() * activitiesData.length);
    return activitiesData[randomIndex];
  };

  const truncateDescription = (description, length = 100) => {
    if (description.length <= length) return description;
    return description.slice(0, length) + '...';
}
  
  const [mainActivity, setMainActivity] = useState(getRandomActivity());

  return (
    <section id="activities" className={`py-4 z-0 relative ${darkMode ? 'bg-[#0c0d0c] ' : 'bg-slate-200'}`}>

    <div className="py-40 flex flex-col gap-10 items-center relative mx-12">
      <div className="relative flex items-center justify-center">
        <p className={`font-bold poppins-font absolute text-[280px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">Activités</p>
        <h2 className={`dancing-font text-6xl font-bold z-[1] ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="300">Ressourcez-vous</h2>
      </div>

      <div className="h-2 w-2 mb-6 bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[300px] before:h-[1px] before:bg-white/30 before:absolute before:right-5 after:content-[''] after:w-[300px] after:h-[1px] after:bg-white/30 after:absolute after:left-5"></div>

      <p className={`uppercase tracking-wider text-center mx-32 ${darkMode ? '' : 'text-black'} lg:text-2xl`} data-aos="fade-up" data-aos-delay="400">Profitez des paysages magnifiques et des nombreuses activités à proximité.</p>

      <div className="flex flex-wrap justify-center gap-4">
        <span className="border-2 border-[#242422] bg-pink-500 rounded-lg px-2 cursor-pointer hover:bg-transparent">Restauration</span>
        <span className="border-2 border-[#242422] bg-pink-500 rounded-lg px-2 cursor-pointer hover:bg-transparent">Randonnée</span>
        <span className="border-2 border-[#242422] bg-pink-500 rounded-lg px-2 cursor-pointer hover:bg-transparent">Activités</span>
        <span className="border-2 border-[#242422] bg-pink-500 rounded-lg px-2 cursor-pointer hover:bg-transparent">Nature</span>
        <span className="border-2 border-[#242422] bg-pink-500 rounded-lg px-2 cursor-pointer hover:bg-transparent">Découverte</span>
      </div>
    
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-3/4 px-4 mb-12 lg:mb-0">
        <a className="block group w-full h-[450px]" href="#">
          <img className="block w-full h-full object-cover mb-5 rounded-lg" src={mainActivity.imageUrl} alt={mainActivity.title}/>
          <span className="inline-block mb-2 border-2 border-[#242422] bg-pink-500 rounded-lg px-2">{mainActivity.category}</span>
          <h4 className="text-3xl text-white font-semibold group-hover:text-orange-900 mb-5">
            <a href={`https://www.google.com/search?q=${mainActivity.title} ${mainActivity.location}`} target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">{mainActivity.title}</a>
          </h4>
          <p className="w-full text-lg">{mainActivity.description}</p>
          <a></a>
        </a>
      </div>

      <div className="w-full lg:w-1/4 px-4">
        {activitiesData.filter(activity => activity !== mainActivity).map((activity, index) => (
          <div key={index} className="flex group mb-8 cursor-pointer" onClick={() => setMainActivity(activity)}>
            <img className="w-48 h-48 rounded-lg" src={activity.imageUrl} alt={activity.title}/>
            <div className="mt-4 md:mt-0 md:ml-6 pt-2">
              <span className="inline-block mb-2 border-2 border-[#242422] bg-pink-500 rounded-lg px-2">{activity.category}</span>
              <h4 className="text-xl text-white font-semibold group-hover:text-orange-900">{activity.title}</h4>
              <p>{truncateDescription(activity.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </section>
  )
}

export default Activities