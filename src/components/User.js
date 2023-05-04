import { useState } from "react"

export default function User() {

    let [username, setUsername] = useState('catanacomics');

    function changeName() {
        let newUsername = prompt('Atualizar nome de usuário:')
        if (newUsername !== '') { setUsername(newUsername); }
    }

    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" data-test="profile-image" />
            <div class="texto">
                <span>
                    <strong><span data-test="name">{username}</span></strong>
                    <ion-icon name="pencil" onClick={changeName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}