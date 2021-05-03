import React, {useEffect, useState} from "react";
import {GridBox} from "../../assets/styles/global";
import Repository from "../repository";

export default function Repositories(props){
    const [repositories, setRepositories] = useState([]);
    const [repositoriesItems, setRepositoriesItems] = useState([]);

    useEffect(() => {
        if(props.repositories){
            setRepositories(props.repositories)
        }
    }, [props.repositories])

    useEffect(() => {
        if(repositories){
            setRepositoriesItems(repositories.map((r) => <Repository key={r.name} repository={r} starred={props.starred}/>))
        }
    }, [repositories])

    return(<>
        <GridBox>
            {repositoriesItems}
        </GridBox>
    </>)
}
