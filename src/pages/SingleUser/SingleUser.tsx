import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './SingleUser.Style.css'

export default function SingleUser() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://20-dns.xyz/2020/04/Ho3einDidgah-realThumb.jpg" alt="" className="userShowTopImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Hossien Rahmati</span>
                            <span className="userShowUserTitle">Rapper</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details </span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">h.rah</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1990</span>
                        </div>

                        <span className="userShowTitle">Contact Details </span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+98 912 1111051</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">h.rah@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Mashhad | Iran</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="h.rah" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" placeholder="Hossien Rahmati" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" placeholder="h.rah@gamil.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" placeholder="+98 912 1111051" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" placeholder="Mashhad | Iran" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://20-dns.xyz/2020/04/Ho3einDidgah-realThumb.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file"> <Publish className="userUpdateIcon" /> </label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton"> Update </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
