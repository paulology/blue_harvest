/* 
 * Demo by http://creative-punch.net
 */

$(document).ready(function() {

    window.onload = function() {
        //this boolean determines what buttons do
        var navLine = false;
        //node list of nav buttons
        var items = document.querySelectorAll('.circle a');
        //set nav button positions in a circle
        for(var i = 0, l = items.length; i < l; i++) {
            //when adding a ninth icon, this doesn't fold up properly
            items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(i-2)*Math.PI)).toFixed(4) + "%";
            items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(i-2)*Math.PI)).toFixed(4) + "%";
        }
        //when the center button is pushed
        document.querySelector('.menu-button').onclick = function(evt) {
            //if nav buttons are not in a vertical line, expand circle
            if (!navLine) {
                evt.preventDefault();
                document.querySelector('.circle').classList.toggle('open');
            //if they are in a vertical line, wrap them back into a circle
            } else {
                evt.preventDefault();
                var lInt = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(0-2)*Math.PI)).toFixed(4);
                var lString = lInt + "%";
                var count = 0-(items.length-3);
                var times = items.length-1;
                for(var i=1; i<=items.length; i++) {
                        var tInt = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(0-2)*Math.PI))+(29.7879*times)).toFixed(4);
                        var tString = tInt + "%";
                        $(items[i]).animate({left: lString, top: tString}, 1000);
                    for(var j=1; j<i; j++) {
                        var tInt2 = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(j-count)*Math.PI))+(29.7879*times)).toFixed(4);
                        var lInt2 = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(j-count)*Math.PI)).toFixed(4);
                        var tString2 = tInt2 + "%";
                        var lString2 = lInt2 + "%";
                        $(items[j]).animate({left: lString2, top: tString2}, 1000);
                    }
                    count++;
                    times--;
                }
                document.querySelector('.menu-button').classList.toggle('down');
                navLine = false;
            }
  
        };

        document.querySelector('.circle a').onclick = function(evt) {
            if (!navLine) {
                var lInt = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(0-2)*Math.PI)).toFixed(4);
                var lString = lInt + "%";
                var count = 1;
                var times = 1;
                for(var i=items.length-1; i>0; i--) {
                    evt.preventDefault();
                    var tInt = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(0-2)*Math.PI))+(29.7879*times)).toFixed(4);
                    var tString = tInt + "%";
                    $(items[i]).animate({left: lString, top: tString}, 100);
                    for(var j=i-1; j>0; j--) {
                        var tInt2 = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*(j-count)*Math.PI))+(29.7879*times)).toFixed(4);
                        var lInt2 = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*(j-count)*Math.PI)).toFixed(4);
                        var tString2 = tInt2 + "%";
                        var lString2 = lInt2 + "%";
                        $(items[j]).animate({left: lString2, top: tString2}, 100);
                    }
                    count--;
                    times++;
                }
                document.querySelector('.menu-button').classList.toggle('down');
                navLine = true;
                
            } else {
                //add box changes here
                
            }
        };
    };
});