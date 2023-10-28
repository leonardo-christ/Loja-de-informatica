    $(document).ready(function() {
        $('#telefone').mask('(99) 99999-9999',{ 
        placeholder: '(00) 00000-0000'});
        $('#nome').attr('placeholder', 'João Silva')
        $('#email').attr('placeholder', 'joaosilva@gmail.com')
        $('#mensagem').attr('placeholder', 'Deixe aqui a sua mensagem de feedback ou duvida.')
        $('#form').validate({
            errorElement: "span",
            errorClass: "error-message",
            rules: {
                nome: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                telefone: {
                    required: true,
                },
            },
            messages: {
                nome: 'Por favor, insira o seu nome',
                email: 'Por favor, insira um e-mail válido',
                telefone: 'Por favor, insira um número de telefone válido',
            },
            submitHandler: function(form) {
                console.log(form);
            },
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos > 0) {
                    alert(`Existem ${camposIncorretos} campos incorretos`);
                }
                console.log(camposIncorretos);
            }
        });
    });

