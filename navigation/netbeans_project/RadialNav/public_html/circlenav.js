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
            items[i].style.left = (85 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(i-1)*Math.PI)).toFixed(4) + "%";
            items[i].style.top = (70 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(i-1)*Math.PI)).toFixed(4) + "%";
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
                //following ends with left border cut off:
                //var lString = lInt-8 + "%";
                
                //following ends just to the right of the left edge of browser:
                var lString = lInt-5 + "%";

                //following ends with top border cut off:
                //var times = -2.7;
                
                //following ends just below the top edge of browser:
                var times = -2.55;
                var count = 0;
                
                for(var i=items.length-2; i>=-1; i--) {
                    evt.preventDefault();                                     //the 15 below↓ was originally 29.7879
                    var tInt = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(0-2)*Math.PI))+(12.5*times)).toFixed(4);
                    var tString = tInt-15 + "%";
                    for(var j=i; j>=0; j--) {                                         //the 15 below↓ was originally 29.7879
                        lInt2 = (85 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(j-count)*Math.PI)).toFixed(4);
                        tInt2 = ((70 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(j-count)*Math.PI))+(2*times)).toFixed(4);
                        var lString2 = lInt2 + "%";
                        var tString2 = tInt2 + "%";
                        $(items[j]).animate({left: lString2, top: tString2}, 500);
                    }
                    $(items[i+1]).animate({left: lString, top: tString, 'line-height': '4', height: '40',
                            MozBorderRadius: '', WebkitBorderRadius: '', borderRadius: ''}, 500);
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