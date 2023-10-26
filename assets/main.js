    $(document).ready(function() {
        $('#telefone').inputmask('(99) 99999-9999');
        $('#nome').attr("placeholder", "João Silva")
        $('#email').attr("placeholder", "joão.silva@exemplo.com")
        $('form').validade({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true
                },
                telefone: {
                    required: true
                }
            }
        })
    })