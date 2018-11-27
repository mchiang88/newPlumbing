var gamePieces = document.querySelectorAll(".parts");
var piece = [
	"Delta_Valve.jpg",
	"Delta_Ara.jpg",
	"Shower_Head.jpg",
	"Delta_faucet.jpg",
	"sink.jpg",
	"shower_arm.jpg"
];


	for(var i = 0; i < gamePieces.length; i++){
		gamePieces[i].src=piece[i];
	}
