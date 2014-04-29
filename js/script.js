;(function() {

    var setJavascript = function(mql) {
        if(mql.matches) {

            //find the y position (from top) of the table of contents
            var tableOfContents = document.getElementById('table-of-contents');
            var elementPosition = tableOfContents.offsetTop;

            //set initial css for table of contents
            tableOfContents.style.position = 'absolute';
            tableOfContents.style.top = 'auto';
            tableOfContents.style.width = '20.97%';

            //add the scroll functionality
            window.onscroll = function(){

                //if you scroll past the y position above, fix the table of contents to the top of the screen
                if(document.body.scrollTop > elementPosition){
                    tableOfContents.style.position = 'fixed';
                    tableOfContents.style.top = 0;
                    tableOfContents.style.width = '16.776%';

                } else {
                    tableOfContents.style.position = 'absolute';
                    tableOfContents.style.top = 'auto';
                    tableOfContents.style.width = '20.97%';
                }
            };
        } else {
            
            //don't do anything on scroll
            window.onscroll = function(){
                return;
            };

            //make sure the table of contents takes up an actual block on the page
            document.getElementById('table-of-contents').style.position = 'static';
        }
    };
	
    setJavascript(window.matchMedia('(min-width: 1060px)'));
	window.onresize = function() {
        console.log(window.width);
        setJavascript(window.matchMedia('(min-width: 1060px)'));
    };
    
	
})();