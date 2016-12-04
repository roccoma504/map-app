function dictSort(dict, sortKey) {
    dict.sort(function (a, b) {
        return parseFloat(a[sortKey]) - parseFloat(b[sortKey]);
    });
}