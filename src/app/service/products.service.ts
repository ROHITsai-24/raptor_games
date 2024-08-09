import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productlist:product[]=[
    {
      id: 1,
      game_title: "Revenge Of The Ronin",
      price: "₹3,999",
      discount: "-20%",
      category: "Base Game",
      image: "revenge.png",
      image2: "revengevid.png",
      description: "Step into the heart of ancient Japan, where blades clash, and honor is forged in the fires of epic boss battles! Immerse yourself in our manga-inspired samurai saga, where every swing is a dance, and every decision shapes your battle.",
      pflag: false,
      features: ["Single Player", "Epic Boss Battles", "Manga-inspired Art"],
      rating: 4.5
    },
    {
      id: 2,
      game_title: "Fortnite",
      price: "₹1,500",
      discount: "-10%",
      category: "Base Game",
      image: "../../../fortnite_vid.jpeg",
      image2: "../../../fortnite_vid.jpeg",
      description: "Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.",
      pflag: false,
      features: ["Battle Royale", "Creative Mode", "Live Events"],
      rating: 4.7
    },
    {
      id: 3,
      game_title: "Star Wars Jedi: Fallen Order",
      price: "₹2,499",
      discount: "-15%",
      category: "Base Game",
      image: "../../../starwarspng.jpeg",
      image2: "../../../starwars.jpeg",
      description: "Experience the first-ever open world Star Wars™ game and explore distinct locations across the galaxy, both iconic and new. Risk it all as scoundrel Kay Vess, seeking freedom and the means to start a new life. Fight, steal, and outwit your way through the galaxy’s crime syndicates as you join the galaxy’s most wanted. If you’re willing to take the risk, the galaxy is full of opportunity.",
      pflag: false,
      features: ["Open World", "Story-driven", "Iconic Locations"],
      rating: 4.6
    },
    {
      id: 4,
      game_title: "Final shape",
      price: "₹3,499",
      discount: "-25%",
      category: "Base Game",
      image: "../../../final shape.jpeg",
      image2: "../../../final shape.jpeg",
      description: "The Standard edition includes The Final Shape story campaign, three new Supers, a new destination, new weapons and armor to collect, and one Episode in the year of The Final Shape. ",
      pflag: false,
      features: ["Story Campaign", "New Supers", "New Destination"],
      rating: 4.4
    },
    {
      id: 5,
      game_title: "The Machines Arena",
      price: "₹2,999",
      discount: "-20%",
      category: "Base Game",
      image: "../../../themachines.jpeg",
      image2: "../../../themac_vid.jpeg",
      description: "TMA is a free-to-play, adrenaline-fueled hero shooter game where players engage in pulse-pounding combat delivered from a top-down perspective. Get rewarded and earn digital collectibles in the midst of the mayhem in PvP and PvE. Powered by Ronin Network.",
      pflag: false,
      features: ["Hero Shooter", "Top-Down Perspective", "PvP and PvE"],
      rating: 4.3
    },
    {
      id: 6,
      game_title: "Black myth",
      price: "₹1,999",
      discount: "-30%",
      category: "Base Game",
      image: "../../../black myth.png",
      image2: "../../../blackvid.jpeg",
      description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
      pflag: false,
      features: ["Action RPG", "Chinese Mythology", "Epic Battles"],
      rating: 4.7
    },
    {
      id: 7,
      game_title: "Red Dead Redemption 2",
      price: "₹4,299",
      discount: "-10%",
      category: "Base Game",
      image: "../../../red2.jpeg",
      image2: "../../../redvid.jpeg",
      description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.",
      pflag: false,
      features: ["Open World", "Story Mode", "Online Multiplayer"],
      rating: 4.9
    },
    {
      id: 8,
      game_title: "Deadpool and Wolverine",
      price: "₹3,799",
      discount: "-15%",
      category: "Base Game",
      image: "../../../deadpool.jpeg",
      image2: "../../../deadpool.jpeg",
      description: "Team up with Deadpool and Wolverine in an epic adventure.",
      pflag: false,
      features: ["Co-op", "Action-Packed", "Marvel Characters"],
      rating: 4.2
    },
    {
      id: 9,
      game_title: "RAWMEN",
      price: "₹3,999",
      discount: "-20%",
      category: "Base Game",
      image: "../../../rawmenpng.jpeg",
      image2: "../../../rawmen.jpeg",
      description: "RAWMEN is an outrageous multiplayer battler that cooks up a tasty take on the arena shooter. Sling soup, fling food and battle as a beefy chef in a game where weapons are an absurd concoction created in the kitchen.",
      pflag: false,
      features: ["Multiplayer", "Arena Shooter", "Unique Weapons"],
      rating: 4.1
    },
    {
      id: 10,
      game_title: "God of War",
      price: "₹2,499",
      discount: "-25%",
      category: "Base Game",
      image: "../../../godofwar.jpeg",
      image2: "../../../godvid.jpeg",
      description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
      pflag: false,
      features: ["Single Player", "Story-driven", "Norse Mythology"],
      rating: 4.8
    },
    {
      id: 11,
      game_title: "FAR HORIZON",
      price: "₹4,999",
      discount: "-10%",
      category: "Base Game",
      image: "../../../farhorizon.png",
      image2: "../../../farhorizonvid.png",
      description: "Far Horizon is an action-adventure RPG set in the far reaches of space where floating islands, beautiful vistas, and alien creatures await. Embark on an epic adventure of exploration, ingenuity, and survival as you loot, shoot, and craft to forge your destiny among the stars.",
      pflag: false,
      features: ["Action-Adventure", "Space Exploration", "Crafting"],
      rating: 4.3
    },
    {
      id: 12,
      game_title: "Grand theft auto v",
      price: "₹2,799",
      discount: "-20%",
      category: "Base Game",
      image: "../../../grand theft.jpeg",
      image2: "../../../gtavid.jpeg",
      description: "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
      pflag: false,
      features: ["Open World", "Story Mode", "Online Multiplayer"],
      rating: 4.9
    },
    {
      id: 13,
      game_title: "Find it in Fortnite",
      price: "A new way to discover what's happening in Fortnite.",
      discount: "-15%",
      category: "Base Game",
      image: "../../../fortnite.jpeg",
      image2: "../../../fortnite2.jpeg",
      description: "Discover the latest events and updates in Fortnite.",
      pflag: false,
      features: ["Battle Royale", "Creative Mode", "Live Events"],
      rating: 4.5
    },
    {
      id: 14,
      game_title: "Rocket Racing",
      price: "Rivalries run hot on Inferno Island. Start your engines with the Lockjaw Starter Quest Pack!",
      discount: "-15%",
      category: "Base Game",
      image: "../../../exp1.jpeg",
      image2: "../../../exp1_2.jpeg",
      description: "Experience high-speed thrills in Rocket Racing.",
      pflag: false,
      features: ["Racing", "High-Speed", "Multiplayer"],
      rating: 4.4
    },
    {
      id: 15,
      game_title: "Fortnite",
      price: "An ancient power from timeless myth. Titan is available now.",
      discount: "-15%",
      category: "Base Game",
      image: "../../../torque-drift.png",
      image2: "../../../fortnite2.jpeg",
      description: "Unleash ancient powers in Fortnite.",
      pflag: false,
      features: ["Battle Royale", "Creative Mode", "Live Events"],
      rating: 4.5
    },
    {
      id: 16,
      game_title: "Torque Drift 2",
      price: "₹3,299",
      discount: "-15%",
      category: "Base Game",
      image: "../../../torque-drift.png",
      image2: "../../../torque_vid.png",
      description: "From the colourful streets of Tokyo to professional competitions sponsored by global brands, Torque Drift 2 invokes all aspects of drift and street culture to offer an experience as diverse and dynamic as the motorsport itself.",
      pflag: false,
      features: ["Drift Racing", "Street Culture", "Multiplayer"],
      rating: 4.2
    },
    {
      id: 17,
      game_title: "The smurfs village party",
      price: "₹2,199",
      discount: "-25%",
      category: "Base Game",
      image: "../../../smurfs.jpeg",
      image2: "../../../smurfs_vid.jpeg",
      description: "Papa Smurf has decided to organize an exceptional party! Embark on a party game set in the Smurfs' Village, featuring an adventure mode.",
      pflag: false,
      features: ["Party Game", "Adventure Mode", "Family Friendly"],
      rating: 4.1
    },
    {
      id: 18,
      game_title: "Honkai Star rail",
      price: "₹3,599",
      discount: "-20%",
      category: "Base Game",
      image: "../../../honkai starrail.jpeg",
      image2: "../../../starrailvid.jpeg",
      description: "Honkai: Star Rail is a new HoYoverse space fantasy RPG. Hop aboard the Astral Express and experience the galaxy's infinite wonders on this journey filled with adventure and thrills.",
      pflag: false,
      features: ["Space Fantasy", "RPG", "Adventure"],
      rating: 4.6
    },
    {
      id: 19,
      game_title: "Fabledom",
      price: "₹4,199",
      discount: "-15%",
      category: "Base Game",
      image: "../../../fabledom.jpeg",
      image2: "../../../fabledom_vid.jpeg",
      description: "Set in a wholesome fairytale world, Fabledom is a laid-back City builder. Enjoy the growth of your settlement, interact with your neighbors and defend your kingdom from magical creatures. All to find true love and live happily ever after!",
      pflag: false,
      features: ["City Builder", "Fairytale World", "Magical Creatures"],
      rating: 4.3
    },
    {
      id: 20,
      game_title: "Thaumaturge",
      price: "₹3,499",
      discount: "-10%",
      category: "Base Game",
      image: "../../../thau.jpeg",
      image2: "../../../tthaum_vid.jpeg",
      description: "Sink deeper into the dark world of Warsaw 1905 AD with The Thaumaturge: Deluxe Edition. In this exciting set, you’ll find the base game, its atmospheric OST, as well as Digital Deluxe Content DLC that includes an artbook, some cool in-game features, and more.",
      pflag: false,
      features: ["Dark Fantasy", "RPG", "Deluxe Edition"],
      rating: 4.2
    },
    {
      id: 21,
      game_title: "A WAY OUT",
      price: "₹3,999",
      discount: "-20%",
      category: "Base Game",
      image: "../../../a-way.jpeg",
      image2: "../../../a-way_vid.jpeg",
      description: "A Way Out is an exclusively co-op adventure where you play the role of one of two prisoners making their daring escape from prison.",
      pflag: false,
      features: ["Co-op", "Adventure", "Prison Escape"],
      rating: 4.4
    },
    {
      id: 22,
      game_title: "Apex Legends",
      price: "₹499",
      discount: "-30%",
      category: "Base Game",
      image: "../../../apexlegends.jpeg",
      image2: "../../../apexvid.jpeg",
      description: "Apex Legends is coming soon to the Epic Games Store. Master an ever-growing roster of diverse legends, deep tactical squad play, and bold new innovations that go beyond the Battle Royale experience",
      pflag: false,
      features: ["Battle Royale", "Tactical Squad Play", "Innovative Gameplay"],
      rating: 4.6
    },
    {
      id: 23,
      game_title: "Assassins Creed Valhalla",
      price: "₹0",
      discount: "-0%",
      category: "Base Game",
      image: "assians1.png",
      image2: "assians2.jpeg",
      description: "Assassin’s Creed Unity tells the story of Arno who embarks upon an extraordinary journey to expose the true powers behind the French Revolution.",
      pflag: false,
      features: ["Open World", "Historical", "Action-Adventure"],
      rating: 4.5
    }
    
]
getproducts(){
    return of(this.productlist.slice(0, 8))
}
getproducts2(){
return of(this.productlist.slice(8,12))
}
getproducts3(){
  return of(this.productlist.slice(12,14))
  }
  getproducts4(){
    return of(this.productlist.slice(15,19))
    }
    getproducts5(){
      return of(this.productlist.slice(19,23))
      }
getproducts6(){
  return of(this.productlist.slice(24, ))
}

      getproductsbyid(id:any){
        return this.productlist.find(product=>product.id==id)
    }

    addproducts(product:product){
      this.productlist.push(product)
      return "product added successfully"
  }
// mange products
  deleteproduct(id:any){
    const ind= this.productlist.findIndex((ele:any)=>ele.id==id)
    if(ind!=-1){
        this.productlist.splice(ind,1)
        return "product deleted successfully"
    }
    else{
        return "product not found"
    }
    }
    updateproduct(pro:product){
        const ind=this.productlist.findIndex((ele:any)=>ele.id==pro.id)
        if(ind!=-1){
            this.productlist.splice(ind,1,pro)
            return "product updated successfully"
        }
        else{
            return "product not found"
        }
    }
}
