$(document).ready(function () {      // início do código javascript - busca do nome
    $('#buscandonome').DataTable({
        initComplete: function () {
            this.api()
                .columns()
                .every(function () {
                    var name = this;
                    var select = $('<select><option value="nome"></option></select>')
                        .appendTo($(name.footer()).empty())
                        .on('change', function () {
                            var val = $.fn.dataTable.util.escapeRegex($(this).val());
 
                            name.search(val ? '^' + val + '$' : '', true, false).draw();
                        });    // final do código javascript - busca do nome
 
                    skin_color // início do código javascript - seleção da cor da pele (não está funcionando. estou tentando corrigir) 
                        .data()
                        .unique()
                        .sort()
                        .each(function (d, j) {
                            select.append('<option value="' + d + '">' + d + '</option>');
                        }); // final do código javascript - seleção da cor da pele (não está funcionando. estou tentando corrigir) 
                });
        },
    });
});


