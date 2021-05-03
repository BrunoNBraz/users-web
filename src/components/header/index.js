import React from "react";
import {HeaderBox} from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "../../assets/styles/global";

export default function Header(){

    return(<>
        <HeaderBox>
            <Link href={"/"} fontSize={"5rem"}><FontAwesomeIcon icon={faGithub} color={'#f7b718'}/> GitUsers</Link>
        </HeaderBox>
    </>)
}
