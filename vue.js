    new Vue({
        el: "#app",
        data: {
            countries: [
                { text: "Los Angeles", isShown: false, timezone: "divLosAngeles"
            },
                { text: "New York", isShown: true, timezone: "divNYSE"
            },
                { text: "London", isShown: true, timezone: "divLondon"
            },
                { text: "Berlin", isShown: true, timezone: "divBerlin"
            },
                { text: "Istanbul", isShown: true, timezone: "divBist"
            },
                { text: "Hong Kong", isShown: false, timezone: "divHongKong"
            },
                { text: "Tokyo", isShown: false, timezone: "divTokyo"
            },
                { text: "Sydney", isShown: false, timezone: "divSydney"
            }
                
            ],
            baseURL: "https://www.google.com/search?q="

        },
        methods: {
            toggle: function(country){
                country.isShown = !country.isShown
            },

            addCountry: function(text, isShown, timezone){
                this.countries.push(text, isShown, timezone);
            }
        }
    })

    $(function(){
  setInterval(function(){
    var divUtc = $('#divUTC');
    //put UTC time into divUTC  
    divUtc.text(moment.utc().format('HH:mm'));      

    var divBist = $('#divBist').text(moment.tz('Europe/Istanbul').format('HH:mm'));
    var divTokyo = $('#divTokyo').text(moment.tz('Asia/Tokyo').format('HH:mm'));
    var divSydney = $('#divSydney').text(moment.tz('Australia/Sydney').format('HH:mm'));
    var divNYSE = $('#divNYSE').text(moment.tz('America/New_York').format('HH:mm'));
    var divLondon = $('#divLondon').text(moment.tz('Europe/London').format('HH:mm'));
    var divLosAngeles = $('#divLosAngeles').text(moment.tz('America/Los_Angeles').format('HH:mm'));
    var divHongKong = $('#divHongKong').text(moment.tz('Asia/Hong_Kong').format('HH:mm'));
    var divBerlin = $('#divBerlin').text(moment.tz('Europe/Berlin').format('HH:mm'));
  },1000);
});
