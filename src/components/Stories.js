export default function Stories() {
    return (
        <div class="stories">
            <Story src="assets/img/9gag.svg" username="9gag" />
            <Story src="assets/img/meowed.svg" username="meowed" />
            <Story src="assets/img/barked.svg" username="barked" />
            <Story src="assets/img/nathanwpylestrangeplanet.svg" username="nathanwpylestrangeplanet" />
            <Story src="assets/img/wawawicomics.svg" username="wawawicomics" />
            <Story src="assets/img/respondeai.svg" username="respondeai" />
            <Story src="assets/img/filomoderna.svg" username="filomoderna" />
            <Story src="assets/img/memeriagourmet.svg" username="memeriagourmet" />
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
                <img src={props.src} alt={props.username} />
            </div>
            <div class="usuario">
                {props.username}
            </div>
        </div>
    )
}