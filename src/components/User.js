export default function User() {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" data-test="profile-image" />
            <div class="texto">
                <span>
                    <strong><span data-test="name">catanacomics</span></strong>
                    <ion-icon name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}