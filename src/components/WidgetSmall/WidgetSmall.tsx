import { Visibility } from '@material-ui/icons'
import './WidgetSmall.Style.css'

export default function WidgetSmall() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
                <ul className="widgetSmList">
                    <li className="widgetSmListItem">
                        <img src="https://20-dns.xyz/2020/04/Ho3einDidgah-realThumb.jpg" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Hossien Rahmati</span>
                            <span className="widgetSmUserTitle">Rapper</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://20-dns.xyz/2020/04/Ho3einDidgah-realThumb.jpg" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Hossien Rahmati</span>
                            <span className="widgetSmUserTitle">Rapper</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://20-dns.xyz/2020/04/Ho3einDidgah-realThumb.jpg" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Hossien Rahmati</span>
                            <span className="widgetSmUserTitle">Rapper</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://20-dns.xyz/2020/04/Ho3einDidgah-realThumb.jpg" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Hossien Rahmati</span>
                            <span className="widgetSmUserTitle">Rapper</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>

                </ul>
        </div>
    )
}
