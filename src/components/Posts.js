import { useState } from "react"

export default function Posts() {

    const feedPosts = [
        { username: "meowed", image: "assets/img/gato-telefone.svg", likeusername: "respondeai", likenumber: "101.523" },
        { username: "barked", image: "assets/img/dog.svg", likeusername: "adorable_animals", likenumber: "99.159" },
        { username: "meowed", image: "assets/img/cat-hut.jpg", likeusername: "barked", likenumber: "152.092" },
    ]

    return (
        <div className="posts">

            {feedPosts.map((foodPost) =>
                <Post username={foodPost.username} image={foodPost.image}
                    likeusername={foodPost.likeusername} likenumber={foodPost.likenumber} />)}

        </div>
    )
}

function Post(props) {

    const userImage = `assets/img/${props.username}.svg`;
    const likeUserImage = `assets/img/${props.likeusername}.svg`

    let [saveIcon, setSaveStatus] = useState('bookmark-outline');
    let [likeIcon, setLikeStatus] = useState('heart-outline');
    let [likeColor, setLikeColor] = useState({color: "black"});

    function saveToggle() {
        if (saveIcon === 'bookmark-outline') { setSaveStatus('bookmark') }
        else { setSaveStatus('bookmark-outline') }
    }

    function likeToggle() {
        if (likeIcon === 'heart-outline') {
            setLikeStatus('heart');
            setLikeColor({color: "red"});
        }
        else {
            setLikeStatus('heart-outline');
            setLikeColor({color: "black"});
        }
    }

    function likePost() {
        if (likeIcon === 'heart-outline') {
            setLikeStatus('heart');
            setLikeColor({color: "red"});
        }
    }

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={userImage} alt={props.username} />
                    {props.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div className="conteudo">
                <img src={props.image} alt={props.imagealt} onDoubleClick={likePost} data-test="post-image" />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={likeIcon} style={likeColor} onClick={likeToggle} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={saveIcon} onClick={saveToggle} data-test="save-post"></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={likeUserImage} alt={props.likeusername} />
                    <div className="texto">
                        Curtido por <strong>{props.likeusername}</strong> e <strong>outras <span data-test="likes-number">{props.likenumber}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}