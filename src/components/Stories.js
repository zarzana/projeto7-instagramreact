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
        <div class="stories">

            {storyUsers.map((user) => <Story key={user} username={user} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {

    const userImage = `assets/img/${props.username}.svg`;

    return (
        <div class="story">
            <div class="imagem">
                <img src={userImage} alt={props.username} />
            </div>
            <div class="usuario">
                {props.username}
            </div>
        </div>
    )
}