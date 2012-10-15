// inside this script element we don't write in HTML, but in the Javascript language instead.
// this is what comments look like in that language.

// this is a little magic, we create something called a "function" that checks to see 
// if the web page has loaded yet, and then starts working.
document.addEventListener( "DOMContentLoaded", function() {

    // We define a new variable here, which creates a "Popcorn instance" based on the 
    // file that lives in the HTML element called "media"
    // Because there's no semi-colon at the end of the line, this whole section of 
    // code is interpreted as a single command.
    var pop = new Popcorn("#media")

    // now instruct "pop" to listen to the file, and pay attention to see when it plays.
        .listen( 'play', function(){
            $('#staticcontent').remove();
        })   
    
    // here are several commands that we give to popcorn.  Each uses one of the popcorn.js
    // plugin commands ("footnote", "googlemap", "image", etc.) to pop new content up into
    // an HTML element identified by the "target" variable you see here.
    
    // each command has a set of "parameter-value pairs" that tell popcorn what to do.

        .googlemap({     // run the googlemap plugin; not the open paren followed by open bracket
            "id":"firstmap",  // id of info -- usually not important, you can leave it out.  note the final comma
            "start":1,   // what time, IN SECONDS, to start showing this information 
            "end":5.9,     // what time to stop
            "target":"popcorn-container", // where to display -- don't forget this!
            "type":"TERRAIN",  // what kind of map
            "zoom":5,   // zoom level 
            "location":"Port Angeles, WA", // where to start
        })  // don't forget to close your brackets

    // you don't need a new line for every parameter-value pair; they can all be squished up if you prefer
        .footnote({"id":"intro","start":6,"end":16,"target":"popcorn-container","text":"Edna begins by talking about her father, Daniel Kelly (1861-1953). The US census of 1880 for Elgin, IL, gives Daniel’s occupation as blacksmith. In the 1900 census of Port Angeles his occupation is bridge builder; in the 1920 census of Eden Valley it is general farming; in the 1920 census of Eden Valley it is dairy farming.  In the 1930 census of Port Angeles he is retired."})

    //this is a long interview, so there are lots of events.  first, a 
    // few that are commented out so you can see how they might be used if you need them
        // .flickr({"id":"flickr","start":25.1,"end":29,"target":"popcorn-container","userid":"78868639@N00","numberofimages":6,"height":"60px", "width":"60px"})
        // .twitter({"id":"flickr","start":29.1,"end":34.5,"target":"popcorn-container","src":"#willferrel"})
        // .wikipedia({"id":"wikipedia","start":29.1,"end":36.5,"target":"popcorn-container","lang":"en","title":"Port Angeles","numOfWords":200, src:"http://en.wikipedia.org/wiki/Port_Angeles,_Washington"})

        .image({"id":"picture-of-house","start":00,"end":46,"target":"popcorn-container","src":"http://samadhisoft.com/wp-content/uploads/2008/02/dscn0404sm.JPG"})
	.footnote({"id":"home","start":17,"end":34,"target":"popcorn-container","text":"The Kelly family’s first home was on E. 6th Street near Washington Street, on land the parents acquired in 1894 by a government land grant. In 1908 the family moved with their children from Port Angeles to Eden Valley; and perhaps 20 years later Daniel and Mary returned to Port Angeles. "})
        .image({"id":"picture-of-house","start":35,"end":46,"target":"popcorn-container","src":"./media/images/pa1900s.jpg"})
        .footnote({start:35, end:46, target:"popcorn-container",text:"The house is here in this image -- somewhere!"})   
        .googlemap({"id":"first map","start":47,"end":51,"target":"popcorn-container","type":"TERRAIN","zoom":7,"location":"Port Angeles"})
        .googlemap({"id":"second map","start":52,"end":60.1,"target":"popcorn-container","type":"TERRAIN","zoom":10,"location":"Port Angeles"})
        .footnote({"id":"parents","start":60.2,"end":70,"target":"popcorn-container","text":"Edna’s parents were Daniel James Kelly (born in Sandusky, OH, on July 25, 1861; died in Port Angeles, WA, on April 24, 1953) and Mary Orintha Babcock (born in Kane County, IL, on February 29, 1872; died in Port Angeles, WA, on September 7, 1960). Daniel came to Port Angeles in October, 1888; Mary came to Port Angeles with her family in the spring of 1889.  Daniel and Mary were married in Port Angeles on October 22, 1890."})
        .footnote({"id":"siblings","start":70.1,"end":80.5,"target":"popcorn-container","text":"Edna’s siblings were Orin L. (Linus?) Kelly (b. July 20, 1893; d. September 9, 1972); Mary Lois Kelly (b. October 24, 1894; d. Dec 4, 1985); Ruby Kelly Devine (b. July 8, 1898; d. March 6, 1979) Theodore R. Kelly (b. March 20, 1900; d. March 10, 1987); Elmer Herbert Kelly (b. June 29, 1903; d. December 25, 1993). All were born in Clallam County, WA."})
        .image({"id":"house","start":81,"end":239,"target":"popcorn-container","src":"./media/images/frontst2.jpg"})
        .footnote({"id":"eden valley","start":240,"end":250,"target":"popcorn-container","text":"Eden Valley is in Clallam County, WA, west of Port Angeles.  It is situated between two highways, US 101 and state highway 112. It can be reached by turning left from 112 either on to Eden Valley Road or on to Dan Kelly Road. The latter road is named for Edna’s father. (At the intersection of Dan Kelly Road the right turn is on to Place Road.) From 1908 for about 20 years (see Dan Kelly’s obituary) the Kelly family lived in Eden Valley."})
        .footnote({"id":"grandparents","start":261,"end":280,"target":"popcorn-container","text":"Edna’s maternal grandparents were Orin Linus Babcock (b. 1836 in NY; d. ~1886 in Kane County, IL) and Mary Chambers (b. February 9, 1845, in Warrenville, Dugage County, IL; d. September 16, 1908, in Port Angeles, WA).  Orin and Mary were married on August 30, 1861, in Geneva, Kane County, IL.  On October 13, 1887, Mary married Erastus S. Derickson (b. August 18, 1835, in Champaign County, OH; d. March 30, 1912, in Orting, Pierce County, WA) in Aurora, Kane County, IL.  In 1888 Mary and Erastus, with Mary’s children by her previous marriage, moved to Port Angeles, WA.  In the 1900 US census of Port Angeles Mary, Erastus, and the Babcock children have their residence on East 7th St, a short distance from the Kelly home on East 6th.  "})
        .footnote({"id":"googlemap","start":336,"end":343,"target":"popcorn-container","text":"Olympic Hot Springs are found at the end of the Olympic Hot Springs Trail, which begins at the end of the Elwha River road.  A resort at the site was closed in 1966."})
        .footnote({"id":"googlemap","start":404,"end":424,"target":"popcorn-container","text":"Marymere Falls is a 90 foot high waterfall near Lake Crescent in the Olympic National Park.  It flows from Falls Creek into Barnes Creek, which in turn flows into Lake Crescent.  It was named for Mary Alice Barnes, a member of the Barnes family which homesteaded in the 1890’s on the shore of Lake Crescent at the mouth of Barnes Creek. The Barnes family built Marymere Lodge on Barnes Point in 1906. It was the first hotel on the south shore of the lake.  The lodge was destroyed by fire in 1914.  It was replaced by a new hotel, the Rosemary Inn. This inn was visited by FDR on September 31 and October 1, 1937.  On June 15, 1946, Olympic National Park was dedicated by Secretary of the Interior Krug; the dedication was conducted at the lodge at Rosemary Inn.  The lodge is now used as a dining hall and meeting place at the Olympic Park Institute."})
        .image({"id":"googlemap","start":425,"end":548,"target":"popcorn-container","src":"./media/images/MarymereFalls.jpg"})
        .footnote({"id":"googlemap","start":549,"end":555,"target":"popcorn-container","text":"The Sol Duc River originates in the Olympic National Park, and flows west across the Olympic Peninsula, eventually joining the Bogachiel River to form the Quillayute River, which in turn flows into the Pacific Ocean south of La Push, WA.  The Sol Duc Hot Springs Resort, built in 1912, is found on this river, south of Lake Crescent off Highway 101."})
        .image({"id":"googlemap","start":556,"end":605,"target":"popcorn-container","src":"./media/images/solduc-pools-partial-photo.jpg"})
        .image({"id":"googlemap","start":606,"end":625,"target":"popcorn-container","src":"./media/images/solducsherpa_trip 034.jpg"})
        .footnote({"id":"googlemap","start":626,"end":635,"target":"popcorn-container","text":"This is a college in the city of Bellingham, WA.  It was established in 1893 as the New Whatcom Normal School, and began instruction in 1899 with 88 students.  It eventually became Western Washington College of Education, then Western Washington State College, and finally Western Washington State University.  Its purpose, according to the state legislature, was “to train teachers in the art of instructing and governing in the public schools.”  The course of study was for one year; then a student was qualified to be an elementary school teacher. Frances Garrett’s grandparents attended this college."})
        .footnote({"id":"googlemap","start":656,"end":705,"target":"popcorn-container","text":"Port Townsend is a small city in Washington State on the west side of Hood Canal, at the point where the canal joins Juan de Fuca Strait."})
        .footnote({"id":"googlemap","start":716,"end":729,"target":"popcorn-container","text":"Among the children of Orin and Mary Babcock was Edna’s uncle Clifford L. Babcock (b. Aurora, Kane County, IL, on June 24, 1866; d. February 26, 1944, in Olympia, WA).  In the first decades of the 20th century Clifford Babcock and family had a farm in Eden Valley, Clallam County, WA.  From 1910 to 1914 Clifford was the treasurer of Clallam County; in 1914 he was a founder and vice-president of the Port Angeles Trust and Savings Bank; from 1913 to 1915 he was a member of the Washington State legislature; and from 1921 to 1925 he served as the Treasurer of Washington State (during the term of Governor Louis Folwell Hart).  He subsequently became a banker in Tacoma, WA. "})
        .footnote({"id":"googlemap","start":983,"end":998,"target":"popcorn-container","text":"Edna says that, on a visit to Elgin, IL, she was shown the grave of a “Grandma Larkin” who lived to be 107 years old. I cannot find this person in any record. If Edna’s recollection is correct, it might refer to the mother of Mary Larkin (see above). Mary arrived in the US in 1831, at the age of 1. She must have been accompanied by family, but I’ve not been able to find a record of the family."});

}, false); // this closes off our magic function
