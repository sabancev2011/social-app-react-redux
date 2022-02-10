import { UserInfoItem } from ".";


function UserInfo({ info }) {
    return (
        <div className="userInfo">
            <div className="userInfo__Wrapper">
                <h4 className="userInfo__title">User information</h4>
                {Object.keys(info).map((el, index) => {
                    return <UserInfoItem key={`${el}_${index}`} infoTitle={el} infoText={info[el]}/>
                })}
            </div>
        </div>
    )
}

export default UserInfo;