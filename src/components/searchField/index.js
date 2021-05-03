import React, {useState} from "react";
import {Search, SearchBox, SearchButton} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function SearchField(props){
    const [search, setSearch] = useState();

    async function searchUser(){
        props.searchedUser(search)
    }

    function handleInfo(e){
        setSearch(e.target.value);
    }

    return(<>
        <SearchBox>
            <Search type={'text'} onChange={(e) => handleInfo(e)}/>
            <SearchButton onClick={() => searchUser()}><FontAwesomeIcon icon={faSearch}/></SearchButton>
        </SearchBox>
    </>)
}
