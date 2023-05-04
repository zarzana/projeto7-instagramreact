export default function Posts() {
    return (
        <div class="posts">
            <Post userimage="assets/img/meowed.svg" username="meowed" image="assets/img/gato-telefone.svg"
                imagealt="gato-telefone" likeuserimage="assets/img/respondeai.svg" likeusername="respondeai"
                likenumber="101.523" />
            <Post userimage="assets/img/barked.svg" username="barked" image="assets/img/dog.svg"
                imagealt="dog" likeuserimage="assets/img/adorable_animals.svg" likeusername="adorable_animals"
                likenumber="99.159" />
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userimage} alt={props.username} />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.image} alt={props.imagealt} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.likeuserimage} alt={props.likeusername} />
                    <div class="texto">
                        Curtido por <strong>{props.likeusername}</strong> e <strong>outras {props.likenumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}