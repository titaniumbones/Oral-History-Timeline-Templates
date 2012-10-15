{
// This whole file is one big lumped-together variable
// All this data will be digested by the Timeline scripts when we 
// feed it in from a web page.
// There are really two sections:

// first, set some general parameters
'dateTimeFormat': 'iso8601', // don't mess with this
//'wikiURL': "http://simile.mit.edu/shelf/", // we should do better with this
//'wikiSection': "Simile Cubism Timeline",   // and with this too.


// second, the actual list of events
// this is a javascript data structure called an
// array, which just means it contains an ordered list of
// other data structures.
// so each element of the 'events' array is itself a complex
// object with many properties

'events' : [   // define an array by listing the elements in between a set of square
               // brackets []
        {'start': '1924',    // notice these are parameter-value pairs
        'title': 'Barfusserkirche', // displays on the timeline
        // description, image, and link display in the pop-up bubble 
        'description': 'by Lyonel Feininger, American/German Painter, 1871-1956',
        'image': 'http://images.allposters.com/images/AWI/NR096_b.jpg',
        'link': 'http://www.allposters.com/-sp/Barfusserkirche-1924-Posters_i1116895_.htm'
        }, // after every element but the last one, close the curly brackets andd add a comma


        {'start': '1913',
        'end': '1916',  // when you put an 'end' date, the event will display as a bar
        'title': 'Three Figures', 
        'description': 'by Kasimir Malevich, Ukrainian Painter, 1878-1935',
        'image': 'http://images.allposters.com/images/BRGPOD/75857_b.jpg',
        'link': 'http://www.allposters.com/-sp/Three-Figures-1913-28-Posters_i1349989_.htm'
        },


        {'start': '1881',
        'end': '1889',
        'title': 'Landschaft bei Montreuil',
        'description': 'by Albert Gleizes, French Painter, 1881-1953',
        'image': 'http://images.allposters.com/images/mer/1336_b.jpg',
        'link': 'http://www.allposters.com/-sp/Landschaft-bei-Montreuil-Posters_i339007_.htm'
        },


        {'start': '1920',
        'end': '1925',
        'title': 'Femme au Miroir',
        'description': 'by Fernand Leger, French Painter, 1881-1955',
        'image': 'http://images.allposters.com/images/AWI/GMR117_b.jpg',
        'link': 'http://www.allposters.com/-sp/Femme-au-Miroir-1920-Posters_i141266_.htm'
        },


        {'start': '1903',
        'end': '1910',
        'title': 'The Old Guitarist',
        'description': 'by Pablo Picasso, Spanish Painter/Sculptor, 1881-1973',
        'image': 'http://images.allposters.com/images/ESC/AP599_b.jpg',
        'link': 'http://www.allposters.com/-sp/The-Old-Guitarist-c-1903-Posters_i328746_.htm'
        },

 {'start': '1922',
        'end': '1924',
        'title': 'A New Guitarist',
        'description': 'by some other guy, really famous, 1881-1973',
        'image': 'http://images.allposters.com/images/ESC/AP599_b.jpg',
        'link': 'http://colorschemedesigner.com/'
        },

        {'start': '1882',
        'end': '1964',
        'title': 'Jour',
        'description': 'by Georges Braque, French Painter, 1882-1963',
        'image': 'http://images.allposters.com/images/SHD/S1041_b.jpg',
        'link': 'http://www.allposters.com/-sp/Jour-Posters_i126663_.htm'
        },


        {'start': '1916',
        'title': 'Still Life with a White Dish',
        'description': 'by Gino Severini, Italian Painter, 1883-1966',
        'image': 'http://images.allposters.com/images/MCG/FS1254_b.jpg',
        'link': 'http://www.allposters.com/-sp/Still-Life-with-a-White-Dish-1916-Posters_i366823_.htm'
        },


        {'start': '1885',
        'end': '1941',
        'title': 'Rhythm, Joie de Vivre',
        'description': 'by Robert Delaunay, French Painter, 1885-1941',
        'image': 'http://imagecache2.allposters.com/images/pic/adc/10053983a_b~Rhythm-Joie-de-Vivre-Posters.jpg',
        'link': 'http://www.allposters.com/-sp/Rhythm-Joie-de-Vivre-Posters_i1250641_.htm'
        },




        {'start': '1891',
        'end': '1915',
        'title': 'Portrait of Horace Brodsky',
        'description': 'by Henri Gaudier-Brzeska, French Sculptor, 1891-1915',
        'image': 'http://imagecache2.allposters.com/images/BRGPOD/102770_b.jpg',
        'link': 'http://www.allposters.com/-sp/Portrait-of-Horace-Brodsky-Posters_i1584413_.htm'
        } // no comma after the final event
] // close brackets to complete the 'events' object
} // final curly brace to end the file

