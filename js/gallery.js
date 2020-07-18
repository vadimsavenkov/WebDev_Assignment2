//define array of objects with 4 items inside:
const destinationsObj = [
    {
      id: 164,
      title: "Europe",
      url: 'https://www.europeanbestdestinations.com/',
      travel: 'Cental Europe'
    },
    {
      id: 174,
      title: "Asia",
      url: 'https://www.lonelyplanet.com/best-in-asia-pacific/',
      travel: 'Asia Pacific'
    },
    {
      id: 482,
      title: 'North America',
      url: 'https://www.escapehere.com/destination/15-underrated-destinations-in-north-america-caribbean/',
      travel: 'Caribbean'
    },
    {
      id: 645,
      title:'South America',
      url: 'https://www.metrojourneys.com/blog/where-should-i-travel-to-in-south-america/',
      travel: 'The Galapagos Islands'
    },
    {
      id: 525,
      title:'Africa',
      url: 'https://africa.com/africas-top-10-travel-destinations/',
      travel: 'Marocco'
    },
    {
      id: 643,
      title:'Australia',
      url: 'https://www.planetware.com/tourist-attractions/australia-aus.htm/',
      travel: 'Great Ocean Road'
    }
  ]
  
  // Identify a variable to store travel image tags:
  
  let travelImgs = ''; 
  
    // Create flex container for travel destinations:
    
  const gallery = document.querySelector('.gallery'); 
  
    // Loop through object items using forEach loop:
    
  destinationsObj.forEach(function(item){
     console.log(item);  
     travelImgs += `<a href="${item.url}"><h2>${item.travel}</h2><img src="https://picsum.photos/id/${item.id}/250/250" alt="${item.title}"></a>`;
     });
  
  // Add HTML image string to gallery container
  gallery.innerHTML = travelImgs;