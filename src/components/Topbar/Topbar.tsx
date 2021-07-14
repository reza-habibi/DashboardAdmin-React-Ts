import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import './Topbar.Style.css'
function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="TopLeft">
                    <span className="logo">RezaAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://20-dns.xyz/2020/04/Ho3einDidgah-realThumb.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
