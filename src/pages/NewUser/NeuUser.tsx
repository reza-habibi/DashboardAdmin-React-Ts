import './NewUser.Style.css'

export default function NeuUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Hossien" />
                </div>

                <div className="newUserItem">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="Hossien Rahmati" />
                </div>

                <div className="newUserItem">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="h.rah@gamil.com" />
                </div>

                <div className="newUserItem">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="password" />
                </div>

                <div className="newUserItem">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="0912..." />
                </div>

                <div className="newUserItem">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="Mashhad | IRAN" />
                </div>

                <div className="newUserItem">
                    <label >Gender</label>
                    <div className="newUserGender">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>

                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className="newUserButton">Create</button>

            </form>
        </div>
    )
}
