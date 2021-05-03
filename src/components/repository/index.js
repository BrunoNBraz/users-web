import React, {useEffect, useState} from "react";
import {Infos, Label, Link} from "../../assets/styles/global";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faCodeBranch, faStar} from "@fortawesome/free-solid-svg-icons";
import {RepositoryBox, ItemCaption, RepositoryItem} from "./styles";

export default function Repository(props) {
    const [repository, setRepository] = useState();

    useEffect(() => {
        if (props.repository) {
            setRepository(props.repository);
        }
    }, [props.repository])

    return (<>
        {repository ?
            <RepositoryBox key={repository.name}>
                <Link fontSize={"3em"} href={repository.html_url} target={"_blank"}>{repository.name}</Link>
                { props.starred ? <Link color={'#504f4f'} fontSize={"1.5em"} href={repository.owner.html_url} target={"_blank"}>{repository.owner.login}</Link> : null}
                <Infos justifySelf={"end"} alignSelf={"end"} justifyContent={'flex-start'}>
                    <RepositoryItem title={"watchers"}>
                        <ItemCaption>
                            <FontAwesomeIcon icon={faEye} size={'2x'} color={'#f7b718'}/>
                        </ItemCaption>
                        <Label padding={"0 5px"}>{repository.watchers}</Label>
                    </RepositoryItem>
                    <RepositoryItem title={"forks"}>
                        <ItemCaption>
                            <FontAwesomeIcon icon={faCodeBranch} size={'2x'} color={'#f7b718'}/>
                        </ItemCaption>
                        <Label padding={"0 5px"}>{repository.forks}</Label>
                    </RepositoryItem>
                    <RepositoryItem title={"stars"}>
                        <ItemCaption>
                            <FontAwesomeIcon icon={faStar} size={'2x'} color={'#f7b718'}/>
                        </ItemCaption>
                        <Label padding={"0 5px"}>{repository.stargazers_count}</Label>
                    </RepositoryItem>
                </Infos>
            </RepositoryBox> : null
        }
    </>)
}
