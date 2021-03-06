import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./container/Homepage"
import "./styles/reset.scss";
import "./styles/_global.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faFacebookF ,faInstagram,faTwitter,faPinterestP} from '@fortawesome/free-brands-svg-icons'

library.add(faSearch)

ReactDOM.render(<Homepage />, document.getElementById("root"));
