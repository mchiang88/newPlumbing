var gamePieces = $(".parts");

var piece = [
	"Delta_Valve.jpg",
	"Delta_Ara.jpg",
	"Shower_Head.jpg",
	"Delta_faucet.jpg",
	"sink.jpg",
	"shower_arm.jpg"
];


	for(var i = 0; i < gamePieces.length; i++){
		var randomIndex = Math.floor(piece.length * Math.random());
		var link = piece.splice(randomIndex, 1)[0];
		gamePieces[i].src = link;
		gamePieces[i].textContent = link.replace('.jpg', '');
	}


var picked = "Delta_Valve.jpg";

gamePieces.click(function() {
	console.log(this.textContent);
})