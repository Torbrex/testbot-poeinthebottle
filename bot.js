const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

const { prefix } = config;

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();


	if (message.content.startsWith(`${prefix}Ding`)) {
		message.channel.send('Dong.');
	} else if (message.content.startsWith(`${prefix}ding`)) {
		message.channel.send('Dong');
	} else if (message.content.startsWith(`${prefix}Bell`)) {
		message.channel.send('Ding Ding :bell:');
	} else if (message.content.startsWith(`${prefix}bell`)) {
		message.channel.send('Ding Ding :bell:');
	} else if (message.content.startsWith(`${prefix}sad`)) {
		message.channel.send(':heart:');
	} else if (message.content.startsWith(`${prefix}Sad`)) {
		message.channel.send(':heart:');
	} else if (message.content.startsWith(`${prefix}cry`)) {
		message.channel.send(':heart:');
	} else if (message.content.startsWith(`${prefix}Cry`)) {
		message.channel.send(':heart:');
	} else if (message.content.startsWith(`${prefix}Test`)) {
		message.channel.send('Ding Ding :bell: I work');
	} else if (message.content.startsWith(`${prefix}test`)) {
		message.channel.send('Ding Ding :bell: I work');
	} else if (message.content == "!lore") { 
		const replies = ["DEEPEST LORE","Lore? None of that here", "Mmmmm, how about no.","I don't feel like it.", "Only thing deeper than this lore are my feelings for my homies."] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);
	} else if (message.content == "!hi") { 
		const replies = ["Hello there!","Greetings.","Hi!", "How are you fairing?\n !Woes or !Well","Hello hello~", "Hey there", "How lovely to see you.",  "Ah, yes, hello there.", "Hiya.", "Well hello to you too."] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); 	
	} else if (message.content == "!Hi") { 
		const replies = ["Hello there!","Greetings.","Hi!", "How are you fairing?\n !Woes or !Well","Hello hello~", "Hey there", "How lovely to see you.",  "Ah, yes, hello there.", "Hiya.", "Well hello to you too."] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); 
	} else if (message.content == "!Hello") { 
		const replies = ["Hello there!","Greetings.","Hi!", "How are you fairing?\n !Woes or !Well","Hello hello~", "Hey there", "How lovely to see you.",  "Ah, yes, hello there.", "Hiya.", "Well hello to you too."] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); 
	} else if (message.content == "!hello") { 
		const replies = ["Hello there!","Greetings.","Hi!", "How are you fairing?\n !Woes or !Well","Hello hello~", "Hey there", "How lovely to see you.",  "Ah, yes, hello there.", "Hiya.", "Well hello to you too."] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); 		
	} else if (message.content == "!well") { 
		const replies = ["Wonderful to hear!","Good, good!","How nice.", "Oh? how pleasent."] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); 
	} else if (message.content == "!Well") { 
		const replies = ["Wonderful to hear!","Good, good!","How nice.", "Oh? how pleasent."] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); 			
    } else if (message.content == "!woes") { 
		const replies = ["It will pass, give it time.","I'm sorry you feel this way.","I wish I could offer more assistance.", "Please, feel better. :heart:"] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); 
	} else if (message.content == "!Woes") { 
		const replies = ["It will pass, give it time.","I'm sorry you feel this way.","I wish I could offer more assistance.", "Please, feel better. :heart:"] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]); 	
    } else if (message.content == "!secret") { 
		const replies = ["I have a pet Sprite named Spoof, he's all black with green eyes.","I've seen Anton's face. He has yellow eyes and orange hair~","Anton once told me he has a younger sister.. he hasn't seen her in 10 years.", "I like to collect the artwork humans seem to make of me. I don't know how Freya gets them, but I love every one of them~ :heart: "] 
		message.replytext = Math.floor((Math.random() * replies.length) + 0); message.author.send(replies[message.replytext]);
    } else if (message.content === `${prefix}server`) {
		message.channel.send(`You're currently in ${message.guild.name} which is where my story's lore belongs. Don't go leaking it.. :perish: `);
	} else if (message.content === `${prefix}Total`) {
		message.channel.send(`There are currently ${message.guild.memberCount} members reading lore in the ${message.guild.name} server! :bookmark: `);
	} else if (message.content === `${prefix}Server`) {
		message.channel.send(`You're currently in ${message.guild.name} which is where my story's lore belongs. Don't go leaking it.. :perish: `);
	} else if (message.content === `${prefix}total`) {
		message.channel.send(`There are currently ${message.guild.memberCount} members reading lore in the ${message.guild.name} server! :bookmark: `);
	} else if (command === 'listen') {
			if (!args.length) {
				return message.channel.send(`What was that, ${message.author}?`);
			}
			else if (args[0] === 'coffee') {
				return message.channel.send('Coffee is bean broth.');
			}
			message.channel.send(`I'm not speaking to you. `);
		} else if (command === 'kick') {
			if (!message.mentions.users.size) {
				return message.reply('Who? Why are you even asking me?');
			}
	
			const taggedUser = message.mentions.users.first();
	
			message.channel.send(`Rude. I am not kicking ${taggedUser.username} because you said so. I should kick you..`);
		} else if (command === 'noose') {
			if (!message.mentions.users.size) {
				return message.reply('Wait what??');
			}
	
			const taggedUser = message.mentions.users.first();
	
			message.channel.send(`${taggedUser.username}? You want to— Oh you're horrible...`);	
	} else if (message.content.startsWith(`${prefix}secret`)) {
			message.author.send('I have a pet Sprite named Spoof.');
			
	} else if (message.content == "!cheerup") { 
			const replies = ["You've been doing a great job! :heart:","","You matter!", "No spaghetti, have upsetti. W—Wait.. *Looks at her notes.* ", "Reminder: :revolving_hearts:  ", "It's okay to not be okay, but you will be. "] 
			message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);	



		} else if (message.content == "!think") { 
			const replies = ["Im pretty sure Sprites are intelligent, but love being pampered..","Why do humans stare at plastic versions of themselves? Then porceed to take their clothing? Horrible..","Coffee is just bean broth.\n    —— !listen ","There were tiny people trapped within a little box. I pulled something to release them, but it just went black. What have I done.. ", "Humans have this strange fascination with"] 
			message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);
	
			
        


	} else if (message.content.startsWith(`${prefix}light`)) {
			message.channel.send('*The embers of the lantern resonate with another..*\n\n *You have summoned Eileen to join your party.*\n   She presents you with a book, at the hip a large lantern, and finally an ornate crest pinned to her mantle.\n \n     —— !lantern - !book - !crest');
			
        } else if (message.content.startsWith(`${prefix}lantern`)) {
			message.channel.send('You and Eileen begin the journey following the lanterns flickering behaviour. The land surrounding you is a bright farmland with open fields, and you eventually come to a split pathway. \n*"The lanterns glow reacts to both roads, but our goal is the forest. What say you?"*\n   —— !East - !West ');
		  } else if (message.content.startsWith(`${prefix}east`)) {
			 message.channel.send('*"Im certainly glad you chose these ruins.. there is something I must find out in regards to these lands."*\n     Night begins to fall, you and Eileen reach the clearing where ruins are visible even in the light of dusk. Filling what would be a clearing are broken pillars and stairway leading into the unknown. As soon as you enter you are met with a thick purple miasma that not only distorts your vision but is physically harmful. Eileens lantern thankfully emits a small aura to keep it at bay, but you will need to both lead and guide her away from any danger. The place is a lightless dungeon filled with many rooms and corridors. Closing in on the many hallways are dark figures working their way towards you. \n —— !lever or !ledge ');
		     } else if (message.content.startsWith(`${prefix}lever`)) {
			      message.channel.send('You hastily pull the nearest lever opening a door hidden somewhere in the many rooms. Eileen takes your hand and pulls you along with her passed the wandering figures, and you two enter a room in search of the now opened door. This room contains a massive winged statue with a riddle etched onto it. \nEileen reads: *"To proceed, one must call upon the blessings of the Precedent who lay asleep in the sea.. Mm, I wonder who that may be?"* she turns to face you. \n    —— !Animosity - !Equity ');
		              } else if (message.content.startsWith(`${prefix}equity`)) {
			                message.channel.send(' *"Hmm, no something isnt quite right..*"\nBefore you two have time to react you are met with a hostile presence. Humanoid—much like yourself—it is a masked person in full armor, protruding from their back are translucent wings made of an unknown energy. They are armed with a broad-sword.\n  *"-! Explorer?"* Eileen calls to you in a concerning tone.\n    ——!engage or !flee');	        
					  } else if (message.content.startsWith(`${prefix}Equity`)) {
				            message.channel.send(' *"Hmm, no something isnt quite right..*"\n Before you two have time to react you are met with a hostile presence. Humanoid—much like yourself—it is a masked person in full armor, protruding from their back are translucent wings made of an unknown energy. They are armed with a broad-sword.\n  *"-! Explorer?"* Eileen calls to you in a concerning tone.\n    ——!engage or !flee');	
										} else if (message.content == "!engage") { 			  
						                 const replies = ["You chose to protect Eileen by fighting the stranger. You are wounded, but alive. \n All actions will be slower. \n -40% Health \n    —— !nextroom to proceed.","You chose to fight the stranger, unharmed, and you rescued a sprite in the process! \n +50% Rare chance items. \n    —— !newroom","You were defeated, leaving Eileen to warp to two of you out. The more you use her power, the more consequences there will be for her. \n    —— !res or !startover "] 
						                 message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);			
									        } else if (message.content.startsWith(`${prefix}nextroom`)) {
										        message.channel.send('*"Long ago I heard whisperings.. that place was apparently built to allow safe passage underground. Supposedly, greater things lived on the surface but have since disappeared. I feel this is a tale made by other humans to deter from the true reason.."* \nWhile she explains the murmurs of the dungeon, you reach a deadend where a large treaure chest sits. \n    —— !chest ');	 
										             } else if (message.content == "!chest") { 
											             const replies = ["You got rusted cutlass! Not bad, but could be useful for something later. \n   !400 gold \n    —— !newroom","There's a worn out scroll. It says: Reigar, on it. Huh. \n  +200 gold\n    —— !newroom","There was.. nothing in it. Maybe next adventure.\n    —— !newroom"] 
											             message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);	
									        } else if (message.content.startsWith(`${prefix}newroom`)) {
													message.channel.send('You both move on and reach the deadend of a massive round room. There are no signs of treasure or enemies, but within the centre lay a slightly open coffin. Inside is a body long withered, but the features give off an indication it was once a woman. The hands are cupped as if in the shape of once holding something. Eileen oddly changes to an empty expression before turning away.\n *"Nothing more, let us end the adventure,"* she says in a frigid tone. \n \n   You are returned to the start of your adventure as if nothing occurred..');		             
									 } else if (message.content.startsWith(`${prefix}flee`)) {
													message.channel.send('Both of you narrowly escape the hostile stranger, aimlessly running through various corridors. Soon you come to an edge where Eileen hops down before you, lighting the way to a tall room with broken pillars. This place is murky with a red haze.. the floor beneath you crumbles and you fall further into the depths. Surrounding you are coprses that seem to have been tied at small pillars, and long since turned to stone and decay. Appearing more as statues than real bodies. Notably 5 surround each pillar. To the far right of the room is a treasure chest. \n     —— !open ');	
												    } else if (message.content.startsWith(`${prefix}open`)) {
													    message.channel.send('After opening the chest you acquire a.... severed hand. Where the insides should be is instead red and cystalized. \n  *"This place is unsettling, lets keep moving.."* Eileen adds. \nThe hand begins to wither and disintegrate. \n    —— !reddust');
					  } else if (message.content.startsWith(`${prefix}animosity`)) {
														message.channel.send('The statue shakes and bits of rubble fall from the neck as it shifts its head. Behind you a masked figure appears, donned in full armor and ethereal wings made of a special energy. It speaks in a somwhat distored voice indistinct of male or female. \n   *"This is a defiled place."*\n    —— !ask - !attack');
					  } else if (message.content.startsWith(`${prefix}Animosity`)) {
														message.channel.send('The statue shakes and bits of rubble fall from the neck as it shifts its head. Behind you a masked figure appears, donned in full armor and ethereal wings made of a special energy. It speaks in a somwhat distored voice indistinct of male or female. \n   *"This is a defiled place."*\n    —— !ask - !attack');
										} else if (message.content.startsWith(`${prefix}ask`)) {
											message.channel.send('*"Once above ground, but the castle sank beneath the surface, melding with the labyrinth it hid from the world."* the figure explains. \n\n *"And the figures?"*\n\n *"Imprints of the people left behind."*\n\n *"I see.."* Eileen looks to you.\n\n   ——— !press - !newroom ');	
										        }  else if (message.content.startsWith(`${prefix}press`)) {
													 message.channel.send('*"The residents here were not only captives, but vessels. Blood-bags for the humans. It continued many years after the castle fell beneath the surface. Descend... or flee. "*\n\n    —— !descend ');
												 } else if (message.content.startsWith(`${prefix}descend`)) {
														message.channel.send('The figure vanishes and the winged statue crumbles behind you two, revealing another passage.\nBelow is a massive area void of any structure, all but a foot of black water sits; covering the entirety of the room. Within the water a faint reflection can be seen: hollow eyes. The room darkens.\n You feel something holding your shoulders.\n    Ending: 8 - New Beginning');

		     } else if (message.content.startsWith(`${prefix}ledge`)) {
				 message.channel.send('You and Eileen jump to the floor of a room just barely beneath you. The room extends into several hallways with various withered weapons laying about, broken and once heavily used. In some parts are cells and what looks to be a small arena where a pile of weapons sit. \n   *"There are two entrances, Explorer. Which one should we check first?"* \n    —— !door - !archway');	
					} else if (message.content.startsWith(`${prefix}door`)) {
						message.channel.send('Beyond the door is a long hallway, though not as ancient looking as the rooms. This one appeared decorative and regal, as if lived in. Almost cut out of a castle entirely. \n*"This must be playing tricks on us.."* Eileen adds, stopping at the sight of what looks to be a foyer. \nWell above what would be the upper part of a castle was broken, and caused light to peer in. Standing in front of the arched stairway was the shadow-outline of a young woman holding a green orb. There is nothing left to do other than ascend the staircase and enter the next room. \n    —— !ascend ');	
					       } else if (message.content.startsWith(`${prefix}ascend`)) {
						     message.channel.send('Entering the these doors merely sent you and Eileen back to the previous room, to the crumbling dungeon the place portrayed itself to be. \n*"...Lets go."* Eileen pushed ahead entering the opposite door. \n    —— !archway');	
							} else if (message.content.startsWith(`${prefix}archway`)) {
								message.channel.send('With Eileen setting foot into the room the sand on the floor turns from its dull grey to a deep red. The surrounding walls burn up, and everything crumbles leaving only the underground cave terrtain. \n    —— !redsand');	


		  } else if (message.content.startsWith(`${prefix}west`)) {
				message.channel.send('You chose the longer pathway to the forest, and enjoy your stroll with Eileen. \n*"Over the years, many wanderers have traveled to these lands. Battered and broken souls come to await the inevitable.. Its never easy, but if it means a second chance for them— —? Ah, what is this?"* \nYou two reach the ruins, but find a red miasma seeps from the stairway surround by broken pillars. Eileens own lantern emits an aura to repel the toxic miasma, and quickly descends the stairs. You will need to protect her. \n    —— !darkroom - !greenroom');	
                   } else if (message.content.startsWith(`${prefix}greenroom`)) {
				        message.channel.send('Wary of the figures you take Eileens arm and run to the nearest room, a dim green glow hangs in the air thanks to the dust, and flames of candles. On the ground are shards of green crystals embedded into the dirt. Before you a shadow manifests, though unlike the others this one is more distinct with a feminine figure, and spear in hand. She does not attack you, just stands there. \n    —— !attack - !avoid ');	
	                   } else if (message.content == "!attack") { 
						const replies = ["The shadow woman deflects your attack, but sees Eileen and decides to spare you, It's evident she does not want you here, Eileen suggest you leave her be. \n    —— !greyhall", "You were defeated upon attacking the mysterious shadow woman, leaving Eileen with the choice to warp to two of you out. The more you use her power, the more consequences there will be for her. \n    —— !res or !startover"] 
						message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);
					        } else if (message.content.startsWith(`${prefix}greyhall`)) {
						       message.channel.send(' *"Strange.. did you see her face? I could see her.."* Eileen mutters aloud as you two wander about. \nThe remaining part of the hallway is broken, revealing a much larger room below. Eileen without warning attempts to scale down the rubble to the open room. It is filled with white fog and Eileen loses her grip along the way.\n    —— !grab - !scale ');	

							  } else if (message.content == "!grab") { 
								  const replies = ["You caught Eileen from the fall, and help her back up before examining the room below. From the distance something begins to stir in the fog. You carefully scale along the ledge with her into another vacant room with a single table. A book sits on the lonely table titled: Harvests. \nYou feel dizzy and all goes black. \n    —— !wake ","You failed to catch Eileen and she fell to the larger room below. \n    —— !jump "] 
								    message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);
							           } else if (message.content.startsWith(`${prefix}wake`)) {
								          message.channel.send('You wake up back home. Eileen is no where in sight. Resting on your lap is a green withered orb, battered and scorched with black markings. \nYou feel something with you.\n    Ending: Ergo');	
									   } else if (message.content.startsWith(`${prefix}jump`)) {
										  message.channel.send('You jump after Eileen and land on another ledge, taking a bit of damage. Eileen is beside you, conscious and safe. You both carefully descend and the room darkens. The grey fog disipates and the surrounding sands of the ledges turn a deep red. \n !redsand ');	
		
										} else if (message.content.startsWith(`${prefix}reddust`)) {
											message.channel.send('The remnants of the hand fall to the ground and scatter along the room, changing its appearance to the spread of fire. Beneath your feet, red sand appears. \n     —– !redsand ');								  
							  } else if (message.content.startsWith(`${prefix}scale`)) {
											message.channel.send('You scale down alongside Eileen, keeping a hand on her as to not let her fall. While climbing down you two pass a broken portion of the wall. Nearby looks to be a collapsed archway where a bridge likely connected. Instead, remnants of the beams rest between the walls. It looks unstable, but provides yet another pathway.\n *"Explorer, there is another room visible." As Eileen points out, there is another room in the broken portion of the wall, where a table, several bookcases, and chairs reside.\n    — !bridge - !study');	
										} else if (message.content.startsWith(`${prefix}bridge`)) {
											message.channel.send('You and Eileen carefully scale the beams of the fallen bridge, getting creaks and rumbles with every movement. You soon reach a lower balcony part of the beam managed to hook onto and enter safely. The balcony is connected to a room—a bedroom—long abandoned and equipped with a large vanity. There are ribbons and hairbrushes visible. In the mirror of the vanity are two female figures; one with long blonde hair sitting in the chair, and the other one a brown haired woman standing behind the seated girl. Resting beside the chair are long decayed strands of blonde hair and a single white ribbon.\n    —— !ribbon');
										       } else if (message.content.startsWith(`${prefix}ribbon`)) {
											     message.channel.send('Upon picking up the ribbon the image of the same once seated young woman stands beside you and Eileen. Her once long blonde hair now cut to a boys length. The dusty air turns red and thickens distoring your vision.\nSomething whispers to you. \n*You feel hands on your shoulders.* \n \n    —— !stop ');	
												       } else if (message.content.startsWith(`${prefix}stop`)) {
													       message.channel.send('You yell for the vision to stop and all goes quiet.\nOnce the scene clears you and Eileen find yourselves outside of the dungeon in the wake of morning. In your hands, the white ribbon.\n    Ending: Childs Escape');			
										} else if (message.content.startsWith(`${prefix}study`)) {
											message.channel.send('Climbing into the new room, its purpose as a study becomes more clear. On the table is a severed hand with a dagger loosely resting on it. Surrounding the table are books and pages of all sort blackened, scorched from being set on fire. Leaving all the information on them unobtainable.\n*"Nothing we can use here.."*\n \nThe remaining documents to your surprise catch fire, and the embers turn into a deep red, engulfing the room in a thick haze. The floor beneath you gives in. \n \n    —— !redhaze ');
										           } else if (message.content.startsWith(`${prefix}redhaze`)) {
											        message.channel.send('As the dust from the rubble settles Eileen comes to check on you. It seems you both fell to a much lower level. Surrounding you is red sand and debris.\nThe ground begins to shake.\n \n    —— !redsand');	

				   } else if (message.content.startsWith(`${prefix}darkroom`)) {
											message.channel.send('You and Eileen quickly enter a more cluttered room with a large opening, like where a balcony once was. Candles illuminate the pathway to a hidden area behind ancient jars and boxes.\nSuddenly out of the corner of your eye you see—Oh—its a sprite. He seems to have taken camp under a box and left over rags. Beside him is a note with the words (nekaO) on it.\nHe squeaks having fulfilled his service and gestures his snout toward the direction of another room beside him.\n\n    —— !greyroom ');	
			                            } else if (message.content.startsWith(`${prefix}greyroom`)) {
											message.channel.send('The room beside the sprite hadly leads anywhere but another hallway or a ledge beneath the broken wall.\n   *"Nekao.. Explorer perhaps you should keep that word in mind.. Pass it on to another one of those little creatures~"* Eileen chuckles making ligh of the strange occurence.\nCutting her amusement short, the ghostly shadow of a woman appears. She does nothing but and watch you, and Eileen. \n    — !ledge - !greyhall');	
			
			
			
										} else if (message.content.startsWith(`${prefix}redsand`)) {
											message.channel.send('Lifting from the red sands and rubble is a giant mass of tattered black cloth and metal; mixed with what looked to be flesh and artificial limbs constructed from the variety. \n   *"Explorer, we cannot meddle with.. this. We need others."* \n    —— !oblatious - !escape');	

										} else if (message.content == "!oblatious") { 
											const replies = ["You attempt to confront the unknown being but the room goes dark. You wake in the middle of no where with Eileen no longer in sight. \n    Ending: Sacrifice ","With Eileen being deside you, two of her companions appear at the rescue. Both Anton and Freya arrive and retrieve both of you from an unforunate fate with the monster. \n    Ending: Safe."," You attack the being and nothing happens, no damage taken, instead it isolates you within darkness, and speaks in an almost incoherent language, yet you understand it. \n    Ending: Great One "] 
											message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);

										} else if (message.content.startsWith(`${prefix}escape`)) {
											message.channel.send('Eileen pulls you along and you ascend the now crumbling dungeon. Escaping alive. \n     Ending: Ignorance is Bliss');	
 
							} else if (message.content == "!res") { 
											const replies = ["Eileen has revived you for a short time. You feel a pulsating energy coursing through your veins, allowing to stand.\n You may repeat your previous action.","Eileen has revived you, though she is weakened by the event.\nYou may repeat your last action.","Eileen's revival has failed, and she is left with no other choice than to warp you back home, beginning your adventure anew. \n    —— !startover"] 
											message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);
							} else if (message.content.startsWith(`${prefix}startover`)) {
											message.channel.send('*You return to the middle of the fields and beside you sits a lone, unlit lantern. You have decided you adventure will not end here.\n    —— !light*');	



		} else if (message.content.startsWith(`${prefix}book`)) {
			message.channel.send('*"Oh? perfect~ We wont be heading someplace spectacular, but I could use your assistance on this."*\nEileen happily pulls you along, and you embark on a short journey.\nYour sights are set on the outskirts of a rather large victorian city, though you will be avoiding the core of the town it seems. Eileen drags you into a lone library building long abandoned, but she makes her way into the study and sits on the table, holding a small book.\n    ——!here');	
			} else if (message.content.startsWith(`${prefix}here`)) {
			   message.channel.send('You reassure your attention to her.\n*"This book was uncovered someplace long ago, many pages are missing and left blank. Id like to decipher what remains of it. Will you.. help?"*\n\n    !always - !nope');	
			   } else if (message.content.startsWith(`${prefix}nope`)) {
				  message.channel.send('Eileen looks at you, not quite disappointed but her eyes stare into your soul. You become uncomfortable.\n :perish: *And I brought you all this way you—*\n    —— !always');
			   } else if (message.content.startsWith(`${prefix}always`)) {
				  message.channel.send('*"Ah, thank you then~"* she smiles happily.\n*"Judging by the writing, this must have been written by a human.. Huh.. Tell me, are you a human?"*\n    —— !human - !nothuman');
			        } else if (message.content.startsWith(`${prefix}nothuman`)) {
					  message.channel.send('Eileen curiously squints her eyes at you.\n *"I dont quite see it..\n    —— !read');
					} else if (message.content.startsWith(`${prefix}human`)) {
						message.channel.send('She chuckles and flips the page.\n *"I can see it. Perhaps itll be easier for you to understand.\n    —— !read' );
			} else if (message.content.startsWith(`${prefix}read`)) {
				message.channel.send('The book pages are oddly fitted, as if some were not only removed but hand sewn in. The first third of the book contains text almost illegible from being so worn out. The second set looks just as withered as the third, but with pieces ripped from them. Finally, the third has very few pages, but with the most clear writing.\n*"Which part of the book should we tackle first? Odd question I know, but given its state.."*\n\n    —— !first - !second - !third');			
			   } else if (message.content.startsWith(`${prefix}first`)) {
				  message.channel.send('The writing is faded, but diagrams and sketches are present within the first few pages. Sigils and runes cover decorative corners of the page, accompanying descriptions, though not legible.\nAt the bottom of one of the pages is the skull of what looks to be an unknown creature. Resembling that of a wolf and cow skull, adorned with large horns, twisted and spread apart in the shape of tree branches. Not much else information is provided.\n    —— !skull - !sigil - !endchapter');
				    } else if (message.content.startsWith(`${prefix}skull`)) {
						 message.channel.send('*"Strange isnt it? Ive never seen such a thing. It says on the next page it was originally hand crafted by a sculptor when it came to him in a... dream one night. Mmm.. shortly.. after... a man offered him wisdom on their lands... resources. Interesting."*\n\n    —— !dreams - !wisdom - !endchapter ');
						} else if (message.content.startsWith(`${prefix}dreams`)) {
							message.channel.send('*"Hm? I wonder what kind of dreams the person writing this had. Not that I would know, our kind do not dream."*\n\n    —— !sigil - !wisdom - !endchapter');			
					} else if (message.content.startsWith(`${prefix}sigil`)) {
							   message.channel.send('Flipping the page Eileen runs her fingers over the etching of a sigil with a short description.\n*"It says here humans often created sigils and engraved them into various areas of the land as to... pre..vent that particular area of withering. As during their time, the end was nearing. Well, that sounds comforting.*"\n\n    —— !skull - !wisdom - !endchapter');
						} else if (message.content.startsWith(`${prefix}wisdom`)) {
							    message.channel.send('*"It notes their agricultural system was failing, however a man passed through their village one day offering a way to keep their crops and livestock alive. Certainly human, your kind require more nourishment, yes?"*\n\n     —— !dreams - !skull - !endchapter');									
							} else if (message.content.startsWith(`${prefix}endchapter`)) {
								message.channel.send('*"That appears to be all we can read going further.. most pages are lost or completely ruined.. Next part?"*\n\n    —— !second - !third - !done');

			   } else if (message.content.startsWith(`${prefix}second`)) {
					message.channel.send('This portion of the book has much longer text, completely different hand writing at that. The font is cursive and done with a combination of finesse and haste. Despite being faded some of it can be read. Behind the first several pages are two sketchs of the same young woman, potentially teenaged; youthful with long dark hair, large eyes, and small pursed lips. The details capture every bit of the person, and as if taken on camera. The second sketch of the same woman appears slightly different; her soft expression was now blank, lack of pupils, and a soulless image overall.\nEileen looks over the image unfazed by the differences.\n\n    —— !siblings - !eerie - !memoir ');
				   } else if (message.content.startsWith(`${prefix}siblings`)) {
					 message.channel.send('*"Is that what comes to your mind?" She remarks in an almost forgiving tone.\n*"Well, that remains to be seen."*\n\n    —— !eerie - !memoir - !nextchapter ');
				   } else if (message.content.startsWith(`${prefix}eerie`)) {
						message.channel.send('*"Does this perturb you? I see.."*\n\n    —— !siblings - !memoir - !nextchapter');
                   } else if (message.content.startsWith(`${prefix}memoir`)) {
						message.channel.send('*"Yes, of course. Someone may have written this in memory of their loved one. The writing cant be salavged much, but it appears this woman was the daughter of the author. I wonder what happened... they speak so fondly of her."*\n\n    —— !siblings - !eerie - !nextchapter');

			   } else if (message.content.startsWith(`${prefix}nextchapter`)) {
						message.channel.send('Lining the final pages of the book appears to be some sort of date, but it is too obscure for your eyes.\n*"Perhaps we should carry on.." she carefully turns the page to the next segment.\n\n    —— !third - !first - !done');


			   } else if (message.content.startsWith(`${prefix}third`)) {
					message.channel.send('*"Ah this is a peculiar one."*\nAkin to the second portion of the book, the final part appears to be both written on remaining pages, and foreign pages sewn in. Not much information sits on the damaged sheets but words can be made out.\n\n"20 years. It fell and took us with it. I had never seen the sky cave in on itself the way my world did. Were there ever a moment in my lifetime where helpnessness became a veil, it would be then. Where people believed fate, destiny, and more than we, neither were in control. We are in an endless tide."\n\n *"This too appears to be written by another person.. such delicate writing, but I can feel the trembling of their hand upon reading this.\n\n    —— !done - !first - !second');			

				} else if (message.content.startsWith(`${prefix}done`)) {
					message.channel.send('*"Oh.. well I suppose I will take this home then. I wonder how it found its way here..? Nevermind that,"* standing up and closing the book.\n\n    —— !conclusion - !again ');
				    } else if (message.content.startsWith(`${prefix}conclusion`)) {
					   message.channel.send('*"An ancient book written by three people at what looks to be different time. Each enduring some sort of pain, but involving loss of a world around that. What does that mean? Well, I will leave that up for you to decide."*');
				} else if (message.content == "!again") { 
						const replies = ["*'But I just.. oh alright. Where would you like to start again?'*\n\n    —— !first - !second - !third","*'Oh? Do you enjoy listening to my voice~? Pick your part.'*\n\n    —— !first - !second - !third","*'Not quit finished yet? Where to?'* \n\n    —— !first - !second - !third", "*'Oh, have we got a bookworm here? Please, choose.'*\n\n    —— !first - !second - !third"] 
						message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);




		} else if (message.content.startsWith(`${prefix}crest`)) {
					message.channel.send('*"The crest? I see.. I have had this for many years. I cannot remember why, but Im fond of it."*\n\n    —— !family - !owner');
			} else if (message.content.startsWith(`${prefix}family`)) {
					message.channel.send('*"I was taken in by a kind warrior at a young age, this however was not a crest of hers, but I would not rule out the possibility of my lineage."*\n\n    —— !owner - !search');	
			} else if (message.content.startsWith(`${prefix}owner`)) {
					message.channel.send('*"I dont remember how I retrieved this. There are no markings or initials on it either."*\n\n    —— !family - !search');
		} else if (message.content.startsWith(`${prefix}search`)) {
					message.channel.send('*"I—Of course. It would be best to put this question to rest and find its origin then. Thank you."*\n\n    —— !origin - !researcher');
				} else if (message.content.startsWith(`${prefix}origin`)) {
					message.channel.send('*"I am from the town to the northeast. The city with all the spires and tall buidlings, wrought iron fences, bridges. Or so Ive been told.. There used to be a number of leagues, one of diplomats, and heralds of both human and non—alike."*\n    —— !researcher - !leagues');		
			    } else if (message.content.startsWith(`${prefix}researcher`)) {
					  message.channel.send('*"Im.. not sure who I would seek for this sort of thing. The town was left to the people and a much smaller community of leaders. Most official buildings have been abandoned.."*\n\n    —— !leaders - !leagues');		
					} else if (message.content.startsWith(`${prefix}leagues`)) {
						message.channel.send('*"Leagues from what I know are divided into several groups all with different tasks; leaders, heralds, warriors, clerics and diplomats. My caretaker was part of one."*\n\n    —— !leaders - !design');
					} else if (message.content.startsWith(`${prefix}leaders`)) {
						message.channel.send('*"I dont know any names, factions, or crests belonging to any leaders or members. I suppose I could ask Daniel.. "*\n\n    —— !design - !daniel');		
					     } else if (message.content.startsWith(`${prefix}design`)) {
							  message.channel.send('*"The design, we could perhaps search around the town for the crest to match any emblems?"*\n\n    —— !town');
							} else if (message.content.startsWith(`${prefix}town`)) {
								message.channel.send('You and Eileen set off on a journey to the Victorian city, during the later hours of dusk the streets have grown quiet, and only the sound of your footsteps can be heard. Its apparent the city is in the midst of construction repairing old, and unused buildings. From afar two of the largest buildings can be seen above; the clock tower with a hanging bell, and the red obelisk. Lining some of the other buildings in the central part of town are embroidered banners with various emblems, though none matching the crest Eileen holds. \n\n    —— !museum - !clocktower  ');		
							   } else if (message.content.startsWith(`${prefix}museum`)) {
								  message.channel.send('Without alarming any passersby you both quietly peer into the museum, seeing no sign of another soul indoors. Placed upon pedestals and shelves are intricate relics, and statues, as well as armor from past heralds lining the walls, with a weapon securely fashioned at their side. All rusted and covered in dust from prolonged amounts of neglect. One armor in particular stood out. It was an iron-barred helm with a pointed visor resting above where the eyes would be.\n*"This reminds of what Anton wears.."*\n\nA description below it reads "Vygl Helm."\nResting beside the helm is a small but worn scroll reading: Shrouded huntsman who took watch over the outer villages after dusk. Here lay the helm of the last of the Vygl that held protection over remaining humans.\n\n    —— !anton - !vygil - !moveon');
								      } else if (message.content.startsWith(`${prefix}anton`)) {
										 message.channel.send('*"When I was younger I found Anton one day.. wounded. Ever since then he has kept watch over me"*\n\n    —— !vygl - !moveon');
										} else if (message.content.startsWith(`${prefix}vygl`)) {
											message.channel.send('*"I was never told of an group by the name of Vygl.. but they must have been close to the humans."*\n\n    —— !moveon - !anton');		
										} else if (message.content.startsWith(`${prefix}moveon`)) {
											message.channel.send('*"I dont see much else here that matches.. perhaps we should move on."*\n\n    —— !clocktower - !giveup');	


							   } else if (message.content.startsWith(`${prefix}clocktower`)) {
									message.channel.send('Well in view of the moonlight stands a clock tower with a giant bell resting motioneless beneath it. The eerie glow of the tower red obelisk from the east gives the clock tower an almost haunting feel. Inside are several platforms with stairs reaching each of them, and one room on the lower level where two doors seal the contents off. In the centre the beam rotates just above a small bed of water leading outside of a grate. Lookng upward the stone stairways spiralup the walls of the tower leading to the room where the clock resides. Even with a closer look at the workings, there are no emblems that match her crest.\n*"It certainly is a pleasent view.. but there is nothing more here. Hello?"* she called out, receiving nothing but an echo amidst the gears turning. \n\n    — !water - !giveup -');		
								 } else if (message.content.startsWith(`${prefix}water`)) {
									 message.channel.send('You point to the water beneath the cogs and suggest to follow it.\n*"Good eye,"* Eileen pulls you along back to the entrance of the clock tower. At the side of the clock tower water can be seen in an underground channel visible from the grates.\n*"Which channel should we follow?"*\n\n    —— !lchannel - !rchannel');	
									  } else if (message.content.startsWith(`${prefix}lchannel`)) {
										message.channel.send('Following the left channel, you and Eileen are led to a lower area of town where the buildings begin to spread apart along the coast of a reservoir. This part of the town has no visible banners, however, something catches your eye the closer you near the edge.\n\n    ——!pickup');			
									    } else if (message.content.startsWith(`${prefix}pickup`)) {
										   message.channel.send('You reach into the cracks of the stone pavement and pick up what looks to be a broken crest with a torn black ribbon attached to it. It is similar to shape to Eileens but fashioned into more of a brooch.\n*"Oh, I wonder if it belonged to a relative of mine.. but why here? The brooch is worn and snagged near the edge of a cliff. No matter..*"\n\n    —— !depths');			
										   } else if (message.content.startsWith(`${prefix}depths`)) {
											  message.channel.send('Eileen quietly looks out to the reservoir stretching miles across. She remains quiet for a moment, but extends her hand and drop the brooch below.\n\n    —— !why');
											  } else if (message.content.startsWith(`${prefix}why`)) {
												message.channel.send('*"An endless and sunless sea. Thank you for your time, but I should get home to Freya."*\n\n    Ending: Fallen Angel');
									  } else if (message.content.startsWith(`${prefix}rchannel`)) {
												message.channel.send('Follwing the right channel, you and Eileen are led to an aqueduct with a steep drop into a canal at the rim of a broken walkway. Barely any water flows through the canal allowing anyone to walk through it. Without any warning Eileen climbs over the fence and scales down the side of the canal to reach the bottom. \n\n    —— !down');
											  } else if (message.content.startsWith(`${prefix}down`)) {
												 message.channel.send('You follow her down unsure why she decides to come down here, but stop to see her staring at a portion of the wall next to her.\n\n    —— !look');			
												} else if (message.content.startsWith(`${prefix}look`)) {
													message.channel.send('You stand beside her and look toward the wall. Up and down the loer section are scratches along the wall, and burried within the mud of the canal is small, broken crest similar to her, but fashioned in the shape of a brooch. A size small enough for a child.\n\n    —— !youth');			
												   } else if (message.content.startsWith(`${prefix}youth`)) {
													  message.channel.send('*"The past shouldnt always matter, yes?"*\n*"...."*\n*"Thank you, but I will search for the rest."*\n\n    Ending: Alone ');			
													} else if (message.content.startsWith(`${prefix}bell`)) {
														message.channel.send('Ding Ding :bell:');			
													} else if (message.content.startsWith(`${prefix}giveup`)) {
														message.channel.send('*"If that is what you prefer, then I will take care of this myself."* Eileen leaves without hesistation.\n\n    Ending: Abandon');			
																
																			
															
														


						} else if (message.content.startsWith(`${prefix}daniel`)) {
								message.channel.send('*"Daniel is another companion of mine. He is a few years older, and comes from the same city as me. We met some time long ago according to him. Daniel called it the orphanage, if I remember correctly."*\n\n    —— !orphanage ');		
							} else if (message.content.startsWith(`${prefix}orphanage`)) {
								message.channel.send('Eileen considers your choice and brings you along. As you two enter the victorian city during the later hours of dusk, the streets have grown quiet, and only the sound of your footsteps can be heard. Its apparent the city is in the midst of construction repairing old and unused buildings. Not far from the centre of everything stands a massive cathedral with ornate pillars in the form of pinnacles, lining an outer garden that takes up a majority of the plaze.\n\n    –— !garden ');		
							   } else if (message.content.startsWith(`${prefix}garden`)) {
								  message.channel.send('The garden sits close to a ledge giving an overview of the fields in the distance. Filling the garden are bright red camellia flowers where a folded banner sits at the base of a broken pillar.\n\n    — !examine');
								} else if (message.content.startsWith(`${prefix}examine`)) {
									message.channel.send('The banner appears ot match the crest Eileen holds, but to what?\n*"I see, so it belonged to someone here. Its neatly folded, and looks as if it belonged to a form of garb.. but here..?" She kneels to set the crest on it, remaining quiet for the duration.\n\n    —— !kneel - !refuse');
								} else if (message.content.startsWith(`${prefix}kneel`)) {
									message.channel.send('You kneel beside her and silently watch over your findings.\n     Ending: Goodbye');			

							   } else if (message.content.startsWith(`${prefix}refuse`)) {
									message.channel.send('You stop Eileen from kneeling, receiving a pestered look from her. Behind the broken pillar something appears to be sitcking out.\n\n    —— !check');
								} else if (message.content.startsWith(`${prefix}check`)) {
									message.channel.send('Directing Eileen behind the pillar she finds an old black ribbing with a small silver ornate bell attached to it. Quietly she stares at it for a moment before holding it close.\n*"Im sorry, Abi."\n\n    Ending: Waiting.');		


            
	}
});




client.login(process.env.BOT_TOKEN);
