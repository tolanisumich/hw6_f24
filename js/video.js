var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("this works");

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Video is Playing");
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		video.play();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Video Paused");
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down Video");
		video.playbackRate *= 0.90;
		console.log("New speed is " + video.playbackRate);
	});
	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Speed Up Video");
		video.playbackRate /= 0.90;
		console.log("New speed is " + video.playbackRate);
	});
	document.querySelector("#mute").addEventListener("click", function() {
		console.log("Mute Video");
		if (video.muted == true) {
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
		} else {
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
		}
	});
	document.querySelector("#slider").addEventListener("click", function() {
		console.log("Changing volume");
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});
	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Skip Ahead");
		if (video.currentTime + 15 > video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 15;
		}
		console.log("New time is " + video.currentTime);
	});
	document.querySelector("#vintage").addEventListener("click", function() {
		console.log("Changing CSS");
		video.classList.add("oldSchool");
	});
	document.querySelector("#orig").addEventListener("click", function() {
		console.log("Changing CSS");
		video.classList.remove("oldSchool");
	});
});
