export default function Suggestions() {

    const userSuggestions = [
        { username: "bad.vibes.memes", description: "Segue você" },
        { username: "chibirdart", description: "Segue você" },
        { username: "razoesparaacreditar", description: "Novo no Instagramê" },
        { username: "adorable_animals", description: "Segue você" },
        { username: "smallcutecats", description: "Segue você" }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {userSuggestions.map((userSuggestion) =>
                <Suggestion username={userSuggestion.username}
                    description={userSuggestion.description} />)}

        </div>
    )
}

function Suggestion(props) {

    const userImage = `assets/img/${props.username}.svg`;

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={userImage} alt={props.username} />
                <div className="texto">
                    <div className="nome">{props.username}</div>
                    <div className="razao">{props.description}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}