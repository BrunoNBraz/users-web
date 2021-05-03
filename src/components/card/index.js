import React, {useEffect, useState} from "react";
import {CardMain} from "./styles";
import {ProfilePicture, Username} from "../../assets/styles/global";

export default function Card(props){
    const [user, setUser] = useState();

    useEffect(() => {
        if(props.user){
            setUser(props.user);
        }
    }, [props.user])

    return(<>
        {
            user ?
                <CardMain onClick={() => props.selectUser(user.login)}>
                    <ProfilePicture size={"130px"} src={user.avatar_url}/>
                    <Username>{user.login}</Username>
                </CardMain> : null
        }

    </>)
}
