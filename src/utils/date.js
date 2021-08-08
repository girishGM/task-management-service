module.exports.sortArray = (arrayObj, sorted = false) => {
    arrayObj.sort(function compare(a, b) {
        var dateA = new Date(a.createdTime);
        var dateB = new Date(b.createdTime);
        return  sorted ? dateB - dateA : dateA - dateB;
    });

  return arrayObj;
}