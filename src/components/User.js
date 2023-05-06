import { useState } from "react"

export default function User() {

    let [username, setUsername] = useState('catanacomics');
    let [userImage, setUserImage] = useState('assets/img/catanacomics.svg');

    function changeName() {
        let newUsername = prompt('Atualizar nome de usuário:')
        if (newUsername !== '') { setUsername(newUsername); }
    }

    function changeImage() {
        let newImage = prompt('Atualizar imagem de usuário:')
        if (newImage !== '') { setUserImage(newImage); }
    }

    return (
        <div className="usuario">
            <img src={userImage} alt="imagem de perfil" onClick={changeImage} data-test="profile-image" />
            <div className="texto">
                <span>
                    <strong><span data-test="name">{username}</span></strong>
                    <ion-icon name="pencil" onClick={changeName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}