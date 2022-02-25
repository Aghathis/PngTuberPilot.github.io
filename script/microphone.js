/*$(document).ready(function(){
	navigator.mediaDevices.enumerateDevices().then(function(devices){
		devices.forEach(function(device){
			if(device.kind == "audioinput")
				$(".audioDevices").append("<option value='"+device.deviceId+"'>"+device.label+"</option>");
		});
	});
});*/


class Microphone{
	constructor(){
	}
	
	startRecord(){
		var self = this;
			if(navigator.mediaDevices){
				self.#contexteAudio = new window.AudioContext();
				self.#analyseur = self.#contexteAudio.createAnalyser();
				self.#gainVolume = self.#contexteAudio.createGain();
				
				var constraint = {
				 audio: {deviceId: self.#selectedDevices ? {exact: self.#selectedDevices} : undefined}
				};
			
				navigator.mediaDevices.getUserMedia(constraint).then(function(stream){								
					var source = self.#contexteAudio.createMediaStreamSource(stream);
					source.connect(self.#analyseur);
					self.#gainVolume.connect(self.#contexteAudio.destination); 
					self.#analyseur.fftSize = 64;
					self.#dataArray = new Uint8Array(self.#analyseur.frequencyBinCount)
				});			
		}
	}
	
	
	getVolume(){
		return this.#volumemeter;
	}
	
	setDevices(deviceId){
		this.#selectedDevices = deviceId; 
	}
	
	// Property
	#volumemeter = 0;
	#dataArray;
	#contexteAudio;
	#analyseur;
	#gainVolume;
	#selectedDevices = undefined;
	//end Property
	
	update(){
		if(this.#dataArray == undefined) return;
		this.#analyseur.getByteFrequencyData(this.#dataArray); 
		this.#volumemeter = (this.#dataArray.reduce(function(a,b){ return (a+b) }))/this.#analyseur.frequencyBinCount;
	}
}


