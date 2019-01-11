$( function() {
// select2
    $('.select-2').select2();

    $('.select-2--no-search').select2({
        minimumResultsForSearch: Infinity
    });
} );