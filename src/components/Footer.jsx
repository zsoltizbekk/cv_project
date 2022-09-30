import React from "react";

const githubImg = require('../assets/github.png');

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <h2 className="h2Footer">Copyright © 2022 zsoltizbekk</h2>
                <a href="https://github.com/zsoltizbekk"><img src={githubImg} className="footer-img" alt="" /></a>
            </div>
        );
    }
}

export default Footer;