export default function Suggestions() {

    const userSuggestions = [
        { username: "bad.vibes.memes", description: "Segue você" },
        { username: "chibirdart", description: "Segue você" },
        { username: "razoesparaacreditar", description: "Novo no Instagramê" },
        { username: "adorable_animals", description: "Segue você" },
        { username: "smallcutecats", description: "Segue você" }
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {userSuggestions.map((userSuggestion) =>
                <Suggestion key={userSuggestion.username} username={userSuggestion.username}
                    description={userSuggestion.description} />)}

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