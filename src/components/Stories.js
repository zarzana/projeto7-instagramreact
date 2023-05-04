export default function Stories() {
    return (
        <div class="stories">
            <Story userimage="assets/img/9gag.svg" username="9gag" />
            <Story userimage="assets/img/meowed.svg" username="meowed" />
            <Story userimage="assets/img/barked.svg" username="barked" />
            <Story userimage="assets/img/nathanwpylestrangeplanet.svg" username="nathanwpylestrangeplanet" />
            <Story userimage="assets/img/wawawicomics.svg" username="wawawicomics" />
            <Story userimage="assets/img/respondeai.svg" username="respondeai" />
            <Story userimage="assets/img/filomoderna.svg" username="filomoderna" />
            <Story userimage="assets/img/memeriagourmet.svg" username="memeriagourmet" />
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.userimage} alt={props.username} />
            </div>
            <div class="usuario">
                {props.username}
            </div>
        </div>
    )
}