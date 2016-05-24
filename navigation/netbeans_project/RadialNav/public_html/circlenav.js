/* 
 * Demo by http://creative-punch.net
 */

$(document).ready(function() {

    window.onload = function() {
        //this boolean determines what big button does
        var open = false;
        //node list of nav buttons
        var items = document.querySelectorAll('.circle a');
        var len = items.length;
        //set nav button positions in a circle
        for(var i=0; i<len; i++) {
            //when adding a ninth icon, this doesn't fold up properly
                                  
            items[i].style.left = (85 - 35*Math.cos(-0.5 * Math.PI - 2*(1/len)*(i-1)*Math.PI)).toFixed(4) + "%";
            items[i].style.top = (70 + 35*Math.sin(-0.5 * Math.PI - 2*(1/len)*(i-1)*Math.PI)).toFixed(4) + "%";
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
        //go to faculty page
        document.querySelector('.faculty').onclick = function(evt) {
            evt.preventDefault();
            unravel('faculty.html');
        };
        //go to facilities page
        document.querySelector('.facilities').onclick = function(evt) {
            evt.preventDefault();
            unravel('facilities.html');
            setTimeout(function() {window.location = 'facilities.html';}, 2000);
        };
        //go to cisco page
        document.querySelector('.cisco').onclick = function(evt) {
            evt.preventDefault();
            unravel('.function');
            setTimeout(function() {window.location = 'cisco.html';}, 2000);
        };
        //go to academies page
        document.querySelector('.academies').onclick = function(evt) {
            evt.preventDefault();
            unravel();
            setTimeout(function() {window.location = 'academies.html';}, 2000);
        };
        //go to initiatives page
        document.querySelector('.initiatives').onclick = function(evt) {
            evt.preventDefault();
            unravel();
            setTimeout(function() {window.location = 'initiatives.html';}, 2000);
        };
        //go to clubs page
        document.querySelector('.clubs').onclick = function(evt) {
            evt.preventDefault();
            unravel();
            setTimeout(function() {window.location = 'clubs.html';}, 2000);
        };
        //go to home page
        document.querySelector('.home').onclick = function(evt) {
            evt.preventDefault();
            unravel();
            setTimeout(function() {window.location = 'home.html';}, 2000);
        };
        function unravel(URL){
            $('.menu-button').animate({opacity: '0'}, 100);
            var lInt = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/len)*(0-2)*Math.PI)).toFixed(4);
            //following ends with left border cut off:
            //var lString = lInt-8 + "%";
            
            //following ends just to the right of the left edge of browser:
            var lString = lInt-5 + "%";//figure out equation based on items.length

            //the following ends with top border cut off:
            //var times = -2.7;
                
            //the following ends just below the top edge of browser:
            var times = -2.55;//figure out equation based on items.length
            var count = -.9;
                
            for(var i=len-1; i>=0; i--) {
                var cycle = 1;
                                                                        //the 12.5 below↓ was originally 29.7879
                var tInt = ((50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/len)*(0-2)*Math.PI))+(12.5*times)).toFixed(4);
                var tString = tInt-15 + "%";
                while(cycle<=10) {
                    for(var j=i-1; j>=0; j--) {                                         
                        lInt2 = (85 - 35*Math.cos(-0.5 * Math.PI - 2*(1/len)*(j+count)*Math.PI)).toFixed(4);
                        tInt2 = ((70 + 35*Math.sin(-0.5 * Math.PI - 2*(1/len)*(j+count)*Math.PI))+(times+count*2)).toFixed(4);
                        var lString2 = lInt2 + "%";
                        var tString2 = tInt2 + "%";
                        $(items[j]).animate({left: lString2, top: tString2}, cycle+10);
                    }
                    var speed = 200+(5*(items.length-i));
                    $(items[i]).animate({left: lString, top: tString, 'line-height': '4', height: '40',
                            MozBorderRadius: '', WebkitBorderRadius: '', borderRadius: ''}, speed);
                    count+=.1;
                    times+=.1;
                    cycle++;
                }
                
            }
            $('.menu-button').hide();
            setTimeout(function() {window.location = URL;}, 2000);
        }
    };
});