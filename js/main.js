$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            msg: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo',
            email: {
                required: 'Por favor, insira um endereço de e-mail',
                email: 'O endereço de e-mail não é válido'
            },
            msg: 'Por favor, insira uma mensagem'
        }
    });
});
