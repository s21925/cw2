var mapFunkcja2 = function() {
for (i = 0; i < this.credit.length; i++){
emit(this.credit[i].currency, parseFloat(this.credit[i].balance));}};

var redFun2 = function(curreny, balance) {
totalBalanceLeft = 0;
for (i = 0; i < balance.length; i++){
totalBalanceLeft += balance[i];}
return totalBalanceLeft;}

db.people.mapReduce(
mapFunkcja2,
redFun2,
{out: "Wynik2",})

printjson(db.Wynik2.find().toArray())