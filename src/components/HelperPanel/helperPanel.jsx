import { useState } from "react";

import './helperPanel.css';

const ContentCreator = ({ title = "", contents = [] }) => {
    return (
        <>
            <div className="Content-helper__container">
                <h1 className="Content-helper__title">{title}</h1>
                {contents.map((content, index) => (
                    <>
                        <button key={index} className="Content-helper__buttons">
                            <img src={content.url} className="Content-helper__img"></img>
                            {content.title}
                        </button>
                    </>
                ))}
            </div>
        </>
    );
}


export default function HelperPanel() {
    const [feedButtons, setFeedButtons] = useState([
        {
            title: "Newsfeed",
            url: "./../../public/images/tv.png"
        },
        {
            title: "Badges",
            url: "./../../public/images/badges.png"
        },
        {
            title: "Explore Stories",
            url: "./../../public/images/explore.png"
        },
        {
            title: "Popular Groups",
            url: "./../../public/images/popular.png"
        },
        {
            title: "Author Profile",
            url: "./../../public/images/author.png"
        },
    ]);

    const [pagesButtons, setPagesButtons] = useState([
        {
            title: "Email Box",
            url: "./../../public/images/email.png"
        },
        {
            title: "Near Hotel",
            url: "./../../public/images/hotel.png"
        },
        {
            title: "Latest Event",
            url: "./../../public/images/event.png"
        },
        {
            title: "Live Stream",
            url: "./../../public/images/stream.png"
        },
    ]);

    const [accountPages, setAccountPages] = useState([
        {
            title: "Settings",
            url: "./../../public/images/settings.png"
        },
        {
            title: "Analyst",
            url: "./../../public/images/Analytics.png"
        },
        {
            title: "Chat",
            url: "./../../public/images/chat.png"
        }
    ]);

    return (
        <>
            <div className="Content-helper__Main-conteiner">
                <div className="Content-helper__Main-conteiner__content">
                    <ContentCreator title="New Feeds" contents={feedButtons} />
                    <ContentCreator title="More Pages" contents={pagesButtons} />
                    <ContentCreator title="Account" contents={accountPages} />
                </div>
            </div>
        </>
    );
};