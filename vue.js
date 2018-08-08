let vue = new Vue({
  el: "#app",
  data: {
    countries: [
      { text: "Turkey", isShown: true },
      { text: "Germany", isShown: false },
      { text: "France", isShown: false },
      { text: "Italy", isShown: false }
    ],
	baseURL: "https://www.wikizero.com/simple/",
	google: "https://www.google.com/search?q=",
	wiki: "https://www.wikizero.com/simple/"
  },
  methods: {
  	toggle: function(country){
    	country.isShown = !country.isShown
    },
	
	addCountry: function(text, isShown){
	this.countries.push(text, isShown);
	}
  }
});