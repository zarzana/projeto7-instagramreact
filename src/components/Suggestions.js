export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Suggestion username="bad.vibes.memes" description="Segue você" />
            <Suggestion username="chibirdart" description="Segue você" />
            <Suggestion username="razoesparaacreditar" description="Novo no Instagram" />
            <Suggestion username="adorable_animals" description="Segue você" />
            <Suggestion username="smallcutecats" description="Segue você" />
        </div>
    )
}

function Suggestion(props) {

    const userImage = `assets/img/${props.username}.svg`;

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={userImage} alt={props.username} />
                <div class="texto">
                    <div class="nome">{props.username}</div>
                    <div class="razao">{props.description}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}