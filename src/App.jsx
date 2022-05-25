import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Events } from './components/events'
import { MiddleSection } from './components/middleSection'
import { About } from './components/about'
import { Services } from './components/services'
import { Partners } from './components/partners'
import { Experiences } from './components/experiences'
import { Guides } from './components/guides'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
})

const App = () => {
	const [landingPageData, setLandingPageData] = useState({})
	useEffect(() => {
		setLandingPageData(JsonData)
  	}, [])

	return (
		<div>
		<Navigation data={landingPageData.Nav} />
		<Header data={landingPageData.Header} />
		<Experiences data={landingPageData.Experiences}/>
		<Events data={landingPageData.Events} />
		<MiddleSection data={landingPageData.middleSection}></MiddleSection>
		<Guides data={landingPageData.Guides} />
		<Partners data={landingPageData.Partners}></Partners>
		{/* <About data={landingPageData.About} /> */}
		{/* <Services data={landingPageData.Services} /> */}
		<Footer />
		</div>
	)
}

export default App