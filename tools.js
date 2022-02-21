class Vec2{
	constructor(x=0,y=0){
		this.x = x;
		this.y = y;
	}
	x;
	y;
}

class Wiggle{
	constructor(){
		noise.seed(Math.random());
	}

	setAmplitude(amp){
		this.#amp = amp;
	}

	setFrequencies(freq){
		this.#freq = freq;
	}

	update(frameDuration){
		this.#wiggleInternalTime+=this.#freq;
		var vec = new Vec2();
		vec.x = noise.perlin2(this.#wiggleInternalTime/100,20)*this.#amp;
		vec.y = noise.perlin2(this.#wiggleInternalTime/100,10)*this.#amp;
		
		return vec;
	}
	
	#rand = false;
	#amp = 10;
	#freq = 1
	#wiggleInternalTime = 0;
}

function categSelect(dom,type){
	if(type!=undefined){
		$('.inputgroup').addClass('d-none');
		$('.inputtype_'+type).removeClass('d-none');	
	}else{
		$('.inputgroup').removeClass('d-none');	
	}
	$(".categButton").removeClass('selected');
	$(dom).addClass('selected');
}
	
class Sprite{
	constructor(){
		this.#dom = $("<div class='spriteframe'></div>").appendTo(".canvas");
	}
	
	createFromInfo(spriteInfo,container,img){		
		var self = this;
		
		if(spriteInfo.base != undefined) this.addBase(spriteInfo.base,img);
		if(spriteInfo.name != undefined){ 
			$(container).append(`<div class='inputgroup inputgroup_`+spriteInfo.name+` inputtype_`+spriteInfo.type+`'></div>`);		
			if(spriteInfo.categorieImage != undefined){				
				$(".inputgroup_"+spriteInfo.name).append("<div><img src='"+img[spriteInfo.categorieImage]+"' class='categorieimage'></img></div>");
			}
			$(".inputgroup_"+spriteInfo.name).append("<div class='input_"+spriteInfo.name+"' style='margin:auto 20px;display:flex;'></div>");		
		}
		
		if(spriteInfo.layer != undefined){
			var select = "<div><select class='customSelect'>";
			if(spriteInfo.non_empty == undefined) select+="<option></option>";


			

			spriteInfo.layer.forEach(function(spriteInfoLayer){
				if(spriteInfoLayer.param == undefined) spriteInfoLayer.param = [];
				
				var htmlparam = "";
				if(spriteInfoLayer.param.find(elem => elem == "animated")){
					self.addAnimation(spriteInfoLayer.name,spriteInfoLayer.frames,img);
				}else{
					self.addLayer(spriteInfoLayer.name,spriteInfoLayer.path,img);
				}
				if(spriteInfoLayer.param.find(elem => elem == "autowiggle")){
					htmlparam += " data-wiggle='true'";
				}
				
				
				if(spriteInfoLayer.param.find(elem => elem == "default")){
					self.chooseLayer(spriteInfoLayer.name);
					htmlparam += "selected";
				}
				select+="<option "+htmlparam+">"+spriteInfoLayer.name+"</option>"
				
				
			});
			
			select +="</select></div>";		
			var spriteSelect = $(select).appendTo(".input_"+spriteInfo.name);		
			spriteSelect.find("select").on("change",function(e){
				if(spriteInfo.wiggling != undefined && !spriteInfo.wiggling.wiggle){
					self.toggleWiggle($(this).find(':selected').data("wiggle") == true);	
				}
				
				self.chooseLayer(this.value);
			});
		}
		
		if(spriteInfo.wiggling != undefined){
			this.#wiggle.setAmplitude(spriteInfo.wiggling.amplitude);
			this.#wiggle.setFrequencies(spriteInfo.wiggling.frequencies);
			
			if(spriteInfo.wiggling.wiggle){
				this.toggleWiggle();
			}
			
			var wiggleCheckbox = $("<div style='padding-left:30px'><button class='customToggle'></button></div>").appendTo(".input_"+spriteInfo.name);		
			wiggleCheckbox.find("button").on("click",function(e){
				self.toggleWiggle();
			});
		}
		
				
		if(spriteInfo.type != undefined){
			if($(".categButton_"+spriteInfo.type).length <= 0){
				$(".showcategories").append(`<button class="customTab categButton categButton_`+spriteInfo.type+`" onclick="categSelect(this,'`+spriteInfo.type+`')">`+spriteInfo.type+`</button>`);
			}
		}
	}
	
	addBase(path,img){
		if(img[path] == undefined){
			console.log(path);
			return;
		}
			
		$(this.#dom).append("<img class='sprite_base' src='"+img[path]+"'></img>");
	}
	
	addLayer(id,path,img){	
		if(img[path] == undefined){
			console.log(path);
			return;
		}
	
		$(this.#dom).append("<img class='d-none sprite_layer sprite_"+id+"' src='"+img[path]+"'></img>");
	}
	
	addAnimation(id,frames,img){
		this.#animated = true;
		$(this.#dom).append("<div class='d-none sprite_layer animated_sprite sprite_"+id+"'></div>");		
		var key = 0;
		frames.forEach(function(frame,i){			
			if(img[frame.path] == undefined){
				console.log(frame.path);
				return;
			}
			
			key+=frame.duration;
			$(".sprite_"+id).append("<img class='d-none' data-key='"+key+"' src='"+img[frame.path]+"'></img>");
		});
		$(".sprite_"+id).data("animation_duration",key);
	}

	animationUpdate(){
		//if(this.#timeCounter > 20) return;
		var dom = $(".animated_sprite:not(.d-none)");
		var ac = this.#timeCounter%dom.data("animation_duration");
		
		var keyCounter = 0;
		$(dom).find("img").each(function(i){
			var frame = $(this);
			var keyStart = keyCounter;
			keyCounter+=frame.data("key")
			var keyEnd = keyCounter;
			if(ac>keyStart && ac < keyEnd && frame.hasClass("d-none")){
				$(dom).find("img").addClass("d-none");
				frame.removeClass("d-none");
			}
		});
	}
	
	// Property
	#pos = new Vec2();	
	#dom;
	#wiggle = new Wiggle();
	#wiggleSwitch = false;
	#animated = false;
	#timeCounter = 0;
	// End Property
	
	chooseLayer(id){
		$(this.#dom).find(".sprite_layer").addClass("d-none");
		$(this.#dom).find(".sprite_"+id).removeClass("d-none");
	}
	
	setPosition(pos){
		this.#pos = pos;
		$(this.#dom).css({top: (this.#pos.y+64)+"px",left:(this.#pos.x+64)+"px"});
	}
	
	getPosition(){ return this.#pos; }
	
	toggleWiggle(forced = undefined){
		this.#wiggleSwitch = forced!=undefined?forced:!this.#wiggleSwitch;
	}
	
	update(elapsed){
		this.#timeCounter+=elapsed;
		if(this.#wiggleSwitch) this.setPosition(this.#wiggle.update());
		if(this.#animated) this.animationUpdate(elapsed);
	}
	
	
}