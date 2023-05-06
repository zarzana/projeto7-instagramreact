export default function Stories() {

    const storyUsers = [
        "9gag",
        "meowed",
        "barked",
        "nathanwpylestrangeplanet",
        "wawawicomics",
        "respondeai",
        "filomoderna",
        "memeriagourmet"
    ]

    return (
        <div className="stories">

            {storyUsers.map((user) => <Story key={user} username={user} />)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {

    const userImage = `assets/img/${props.username}.svg`;

    return (
        <div className="story">
            <div className="imagem">
                <img src={userImage} alt={props.username} />
            </div>
            <div className="usuario">
                {props.username}
            </div>
        </div>
    )
}