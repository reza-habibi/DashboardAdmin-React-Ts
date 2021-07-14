import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

import './FeaturedInfo.Style.css'

function FeaturedInfo() {
    return (
        <div className="featured" >
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,125</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared To last Month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,125</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward  className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared To last Month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,125</span>
                    <span className="featuredMoneyRate">+2.4 <ArrowUpward className="featuredIcon "  /></span>
                </div>
                <span className="featuredSub">Compared To last Month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
