import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../../components/card";
import {Container, FlexBox, Loading} from "../../assets/styles/global";
import SearchField from "../../components/searchField";
import User from "../../components/user";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export default function Users(props) {
    const [since, setSince] = useState(0);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState([]);
    const [user, setUser] = useState();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.match.params && props.match.params.username) {
            setSearch(props.match.params.username)
        } else {
            getUsers();
            addSinceValue();
        }
    }, []);

    useEffect(() => {
        setCards(users.map((user) => <Card key={user.login} user={user} selectUser={handleSearchUser}/>))
    }, [users]);

    async function getUsers() {
        setLoading(true)
        await axios.get(`users?per_page=12&since=${since}`).then(response => {
            setUsers(response.data);
            setLoading(false);
        }).catch()
    }

    async function searchUser() {
        setLoading(true)
        await axios.get(`users/${search}`).then(response => {
            setUser(response.data);
            setLoading(false);
        }).catch()
    }

    function handleSearchUser(e) {
        setSearch(e);
    }

    useEffect(() => {
        if (search && search.length > 0) {
            searchUser();
        }
    }, [search]);

    function addSinceValue(){
        let initial = 0;
        setInterval(function (){
            initial += 12
            setSince(initial)
        }, 20000);
    }

    useEffect(() => {
        if (since && !user) {
            getUsers();
        }
    }, [since]);

    return (<>
        <Container>
            <SearchField searchedUser={handleSearchUser}/>
            <FlexBox>
                {
                    loading ? <Loading><FontAwesomeIcon icon={faSpinner} size={'5x'} color={'#f7b718'}/></Loading>
                        : user ? <User user={user}/> : cards
                }
            </FlexBox>
        </Container>
    </>)
}
