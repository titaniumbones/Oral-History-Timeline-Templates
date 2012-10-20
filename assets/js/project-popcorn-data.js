// This is a short program written in Javascript, which will load 
// your Popcorn events into the main interview page when it's run from that page.
// inside this script element we don't write in HTML, but in the Javascript language instead.
// This is what comments look like in Javascript.  

// This first line is a little javascript magic. We create a function that only runs
// after the web page has finished loading. By waiting till then, we can be sure,
// for instance, that the "media" element already exists.
document.addEventListener( "DOMContentLoaded", function() {

    // The first task is to define a new variable here, "pop", which creates a "Popcorn instance" keyed to the 
    // progress of the media file that lives in the HTML element called "media"
    // Because there's no semi-colon at the end of the line, the whole section of 
    // code is interpreted as a single command.
    var pop = new Popcorn("#media")

    // now instruct "pop" to listen to the file, and pay attention to see when it plays.
        .on( 'play', function(){
            $('#staticcontent').remove();
        });
    
    // Next we need to identify which Google spreadsheet we're going to want to use.  
    // You'll need to change the key to match your spreadsheet.  Remember, this is the 
    // part in the spreadsheet URL that comes between "key=" and "&"
    // It's very important, though, to keep the same column headers as in our example spreadsheet!
    var public_spreadsheet_key = '0Aqhzp2yOOf0zdEQyNTNPMktHa3NmUGRDcmlOZmg1TUE';
    
    // now we are going to use the tabletop.js library, which was called in our 
    // HTML file, to grab the date from the spreadsheet and process it so that 
    // popcorn can use it.  
    var mytables = Tabletop.init( { key: public_spreadsheet_key,
                                    callback: processInfo,
                                    simpleSheet: false } );
    // if you're having problems with this, you can uncomment the next line and 
    // look in the browser's console to see if the data looks like it's supposed to.
    // console.log(mytables.data);

    // This is our "callback function".  When tabletop grabs the spreadsheet data,
    // it gets sent here and processed.  We take advantage of this feature of tabletop
    // to have our events get automatically created.  
    function processInfo(sheets) {
        console.log(sheets);
        // in this example "simpleSheet" is turned OFF, so 
        // we need to select only the data in the sheet we're 
        // looking for.  In my example the sheet ocntaining popcorn-data is 
        // called "popcornSheet".  If you name your sheet somethign else this won't
        // work.  
        var data = sheets.popcornSheet.all();
        // this loop runs once for each row in the spreadsheet. 
        for (var i in data) {
            // use the plugin column to create a popcorn event of type "plugin"
            pop[data[i].plugin] ({
                "id" : data[i].id,
                "start" : parseInt(data[i].start), // we have to take the spreadsheet string and turn it into an integer...
                "end" : parseInt(data[i].end),
                "target" : data[i].target,
                "text" : data[i].text,
                "src" : data[i].src,
                "location" : data[i].location, // obviousy not all of the columns are used by each plugin type!
                "zoom": data[i].zoom,
                "type" : data[i].type
            }); // if you want to use some of the other plugins -- like Wikipedia -- you will have to add the columns to the spreadsheet & then add some code to this function!


            // this is another debugging line -- if things aren'tworking right you can uncomment it & see what's going wrong
            // in the console.  
            // console.log(data[i]);
        };
    }
    // If you want to add any events by hand you can add them here with a "pop.googlemap ({})", etc.  
});

