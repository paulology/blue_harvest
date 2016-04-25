/* 
 * Demo by http://creative-punch.net
 */

$(document).ready(function() {

    window.onload = function() {
        //this boolean determines what big button does
        var open = false;
        //this boolean determines what nav buttons do
        var navLine = false;
        //node list of nav buttons
        var items = document.querySelectorAll('.circle a');
        //set nav button positions in a circle
        for(var i = 0, l = items.length; i < l; i++) {
            //when adding a ninth icon, this doesn't fold up properly
            items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(i-1)*Math.PI)).toFixed(4) + "%";
            items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(i-1)*Math.PI)).toFixed(4) + "%";
        }
        //when the center button is pushed
        document.querySelector('.menu-button').onclick = function(evt) {
            if(!open) {
                open = true;
                $('.menu-button').text('CLOSE');
            } else {
                open = false;
                $('.menu-button').text('OPEN');
            }
            evt.preventDefault();
            document.querySelector('.circle').classList.toggle('open');
        };

        document.querySelector('.circle a').onclick = function(evt) {
            $('.menu-button').animate({opacity: '0'}, 100);
            if (!navLine) {
                var lInt = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(0-2)*Math.PI)).toFixed(4);
                var lString = lInt + "%";
                var count = 1;
                var times = 1;
                //change "HOME" to rectangle
                //$(items[0]).animate({'line-height': '4', height: '40', MozBorderRadius: '', 
                            //WebkitBorderRadius: '', borderRadius: ''}, 300);
                for(var i=items.length-1; i>=0; i--) {
                    evt.preventDefault();                                     //the 15 below↓ was originally 29.7879
                    var tInt = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(0-2)*Math.PI))+(12.5*times)).toFixed(4);
                    var tString = tInt + "%";
                    $(items[i]).animate({left: lString, top: tString, 'line-height': '4', height: '40',
                            MozBorderRadius: '', WebkitBorderRadius: '', borderRadius: ''}, 300);
                    for(var j=i; j>=0; j--) {                                         //the 15 below↓ was originally 29.7879
                        var tInt2 = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(j-count)*Math.PI))+(12.5*times)).toFixed(4);
                        var lInt2 = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(j-count)*Math.PI)).toFixed(4);
                        var tString2 = tInt2 + "%";
                        var lString2 = lInt2 + "%";
                        $(items[j]).animate({left: lString2, top: tString2}, 300);
                    }
                    count--;
                    times++;
                }
                navLine = true;
                $('.menu-button').hide();
            //if navigation is in a line
            } else {
                //add box changes here
                
            }
        };
    };
});