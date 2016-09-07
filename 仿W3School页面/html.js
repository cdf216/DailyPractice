/**
 * Created by ZZ on 16/4/11.
 */

var curIndex = 0;
var timeInterval = 3000;
var arr = new Array();
arr[0] = "imgad.jpeg";
arr[1] = "imgad1.jpeg";

setInterval(changeImg,timeInterval);
function changeImg(){
    var obj = document.getElementById("showpic");
    if(curIndex == arr.length - 1)
    {
        curIndex = 0;
    }
    else
    {
        curIndex += 1;
    }
    obj.src="images/"+arr[curIndex];
}

