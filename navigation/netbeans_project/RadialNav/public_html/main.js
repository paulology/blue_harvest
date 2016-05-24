/* 
 * Demo by http://creative-punch.net
 */

$(document).ready(function() {

    $(window).onload = function() {
        //node list of nav buttons and length of list
        var items = document.querySelectorAll('.circle a');
        var len = items.length;
        //var for top margin equation
        var times = -2.55;
        //set nav button positions in a circle
        var lInt = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/len)*(0-2)*Math.PI)).toFixed(4);
        var lString = lInt-5 + "%";
        for(var i=0; i<items.length; i++) {
            //set left margin of nav buttons
            document.querySelector(items[i]).style.left = lString;
            //set top margin of nav buttons
            var tInt = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/len)*(0-2)*Math.PI))+(12.5*times)).toFixed(4);
            var tString = tInt-15 + "%";
            document.querySelector(items[i]).style.top  = tString;
            //$(items[i]).animate({left: lString, top: tString, 'line-height': '4', height: '40',
            //                MozBorderRadius: '', WebkitBorderRadius: '', borderRadius: ''}, 0);
            times++;
        }
//        //set home button
//        document.querySelector('#home').style.left = "10.8775%";
//        document.querySelector('#home').style.top = "10.9132%";
//        //set clubs button
//        document.querySelector('#clubs').style.left = "10.8775%";
//        document.querySelector('#clubs').style.top = "23.413200000000003%";
//        //set initiatives button
//        document.querySelector('#initiatives').style.left = "10.8775%";
//        document.querySelector('#initiatives').style.top = "35.9132%";
//        //set academies button
//        document.querySelector('#academies').style.left = "10.8775%";
//        document.querySelector('#academies').style.top = "48.4132%";
//        //set cisco buttons
//        document.querySelector('#cisco').style.left = "10.8775%";
//        document.querySelector('#cisco').style.top = "60.9132%";
//        //set facilities button
//        document.querySelector('#facilities').style.left = "10.8775%";
//        document.querySelector('#facilities').style.top = "73.4132%";
//        //set faculty button
//        document.querySelector('#faculty').style.left = "10.8775%";
//        document.querySelector('#faculty').style.top = "85.9132%";
    };
});