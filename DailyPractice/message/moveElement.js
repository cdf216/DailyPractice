/**
 * Created by Administrator on 2016/6/22.
 */
function moveElement(elementID, final_x,final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
}