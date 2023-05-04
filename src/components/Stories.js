export default function Stories() {
    return (
        <div class="stories">
            <Story username="9gag" />
            <Story username="meowed" />
            <Story username="barked" />
            <Story username="nathanwpylestrangeplanet" />
            <Story username="wawawicomics" />
            <Story username="respondeai" />
            <Story username="filomoderna" />
            <Story username="memeriagourmet" />
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