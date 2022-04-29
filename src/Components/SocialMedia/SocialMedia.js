import { Icon } from "@iconify/react";
import './SocialMedia.css';

export default function SocialMedia() {
    return (
        <>
        <div className="social_media_container">
            <div className="social_icons">
                <a
                    href="https://github.com/Francine-Pepe"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Icon
                    className="social_icons_icons"
                    icon="akar-icons:github-fill"
                    color="#5987b6"
                    width="35"
                    height="35"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/francinemelopepe/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Icon
                    className="social_icons_icons"
                    icon="entypo-social:linkedin-with-circle"
                    color="#5987b6"
                    width="35"
                    height="35"
                    />
                </a>
                <a
                    href="https://www.behance.net/francinepepe"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Icon
                    className="social_icons_icons"
                    icon="ant-design:behance-circle-filled"
                    color="#5987b6"
                    width="35"
                    height="35"
                    />
                </a>
                <a
                    href="https://www.instagram.com/fran.e.a.canon.do.pai/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Icon
                    className="social_icons_icons"
                    icon="entypo-social:instagram-with-circle"
                    color="#5987b6"
                    width="35"
                    height="35"
                    />
                </a>
            </div>

        </div>
        </>
    );
}