/**
 * Created by Administrator on 2016/6/21.
 */

//function stripeTables() {
//    if (!document.getElementsByTagName ) return false;
//    var tables = document.getElementsByClassName("table");
//    var odd, rows;
//    for (var i=0; i<tables.length; i++) {
//        odd = false;
//        rows = tables[i].getElementsByClassName("tr");
//        for (var j=0; j<rows.length; j++) {
//            if (odd == true) {
//                rows[j].style.backgroundColor = "#ffc";
//                odd = false;
//            }else {
//                odd = true;
//            }
//        }
//    }
//}

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for (var i=0; i<tables.length; i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for (var j=0; j<rows.length; j++) {
            if (odd == true) {
                addClass(rows[j],"odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}
function addClass(element,value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value;
        element.className = newClassName;
    }
}
addLoadEvent(stripeTables);