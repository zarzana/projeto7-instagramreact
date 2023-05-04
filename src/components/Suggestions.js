export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Suggestion username="bad.vibes.memes" userimage="assets/img/bad.vibes.memes.svg" description="Segue você" />
            <Suggestion username="chibirdart" userimage="assets/img/chibirdart.svg" description="Segue você" />
            <Suggestion username="razoesparaacreditar" userimage="assets/img/razoesparaacreditar.svg" description="Novo no Instagram" />
            <Suggestion username="adorable_animals" userimage="assets/img/adorable_animals.svg" description="Segue você" />
            <Suggestion username="smallcutecats" userimage="assets/img/smallcutecats.svg" description="Segue você" />
        </div>
    )
}

function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userimage} alt={props.username} />
                <div class="texto">
                    <div class="nome">{props.username}</div>
                    <div class="razao">{props.description}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}