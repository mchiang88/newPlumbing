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
		gamePieces[i].src = piece.splice(randomIndex, 1);
	}
