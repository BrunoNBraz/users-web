import React, {useEffect, useState} from "react";
import {Info, Nav, NavItem, Number, UserInfo} from "./styles";
import {Infos, Link, Loading, ProfilePicture} from "../../assets/styles/global";
import axios from "axios";
import Repositories from "../repositories";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export default function User(props) {
    const [user, setUser] = useState();
    const [navActive, setNavActive] = useState(true);
    const [repositories, setRepositories] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.user) {
            setUser(props.user);
        }
    }, [props.user]);

    useEffect(() => {
        if (user) {
            getRepos();
        }
    }, [user]);

    function findRepos() {
        setLoading(true);
        setNavActive(true);
        getRepos();
    }

    function findStarred() {
        setLoading(true);
        setNavActive(false);
        getStarred();
    }

    async function getRepos() {
        await axios.get(`users/${user.login}/repos`).then(response => {
            setRepositories(response.data)
            setLoading(false);
        }).catch()
    }

    async function getStarred() {
        await axios.get(`users/${user.login}/starred`).then(response => {
            setRepositories(response.data)
            setLoading(false);
        }).catch()
    }

    return (<>
        {user ?
            <UserInfo>
                <ProfilePicture src={user.avatar_url} size={"200px"}/>
                <Link href={user.html_url} target={"_blank"}>{user.login}</Link>
                <Infos>
                    <Info>
                        <Number>{user.followers}</Number>
                        <Link fontSize={"2rem"} href={`https://github.com/${user.login}?tab=following`} target={"_blank"}>Followers</Link>
                    </Info>
                    <Info>
                        <Number>{user.following}</Number>
                        <Link fontSize={"2rem"} href={`https://github.com/${user.login}?tab=following`} target={"_blank"}>Following</Link>
                    </Info>
                </Infos>
                <Nav>
                    <NavItem active={navActive} onClick={() => findRepos()}>Repositories</NavItem>
                    <NavItem active={!navActive} onClick={() => findStarred()}>Starred repositories</NavItem>
                </Nav>
                {loading ? <Loading><FontAwesomeIcon icon={faSpinner} size={'5x'} color={'#f7b718'}/></Loading> : <Repositories repositories={repositories} starred={!navActive}/>}
            </UserInfo> : null
        }


    </>)
}
