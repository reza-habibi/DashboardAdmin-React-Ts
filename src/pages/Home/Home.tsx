import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import {data} from '../../demoData'
import './Home.Style.css'

function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data}  title= "User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}

export default Home
