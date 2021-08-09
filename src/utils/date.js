module.exports.sortArray = (arrayObj, sorted = false) => {
    arrayObj.sort(function compare(a, b) {
      try{
        var dateA = new Date(a.createdTime);
        var dateB = new Date(b.createdTime);
        return  sorted ? dateB - dateA : dateA - dateB;
      }catch(e){
        return  1;
      }
    });

  return arrayObj;
}