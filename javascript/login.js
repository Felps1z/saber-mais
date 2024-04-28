const formLogin = document.getElementById('form');

function verifyLogin(matricula, senha) {
    const matriculaSalva = localStorage.getItem('matricula')
    const senhaSalva = localStorage.getItem('senha')
    return matricula === matriculaSalva && senha === senhaSalva
}

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputMatricula = document.getElementById('matricula').value;
    const inputSenha = document.getElementById('senha').value;

    if (verifyLogin(inputMatricula, inputSenha)){
        window.location.href = '../html/home.html';
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorreta!',
            icon: 'error',
            confirmButtonText: 'Ok!'
        })
    }
})