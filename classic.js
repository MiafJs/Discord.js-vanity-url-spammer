
'use strict';
const Discord = require("discord.js");
const fetch = require("node-fetch");
const { resolve } = require("path");
const client = global.client = new Discord.Client();
const msec = {}
const queue = new Map();
/* axios ve request modüllerinden de url'yi çekebilirsiniz. Çok fazla istek gelir ise diğer türden veri çekilmesini gösterebilirim.*/

const updownheree = {
    miafArray: [],
    mmpsh(...miafArray) {
    this.miafArray.push(...miafArray);
    },
    mfx(index) {
    return this.miafArray[index];
    },
    mxdt(nmb, letAry){
    if(!nmb || !letAry) new Error("Numara veya Array değeri girmediniz.")
    return delete letAry[numb];
    
    }
    };

client.object = {
    "guildID": "",
    "vanityURL" : "",
    "botToken" : ""
}

class Miaf {
    constructor() {
        this.miafURL;
        process.on('message', (data) => {
            if (queue.get(data.id)) {
              queue.get(data.id)(data);
              queue.delete(data.id);
            }
          });
    }
     uwMiaf(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

    async urlBaslat() {
        let url = client.object.vanityURL;
        let guilds = client.guilds.cache.get(client.object.guildID);
        this.miafURL = setInterval(async function()  {
            uwMiaf(2000);
            await this.urlUpdate(url, guilds);
        }, 1000);
    }

    urlDurdur() {
        clearInterval(this.miafURL).then(x => console.log("basarili! url artık spamlanmıyor!"))
        let jj = updownheree.miafArray
        while(jj.length){
            jj.pop()
        };
    }
    
    async urlUpdate() {
        let setVU = client.object.vanityURL;
        let gi = client.guilds.cache.get(client.object.guildID);
        console.log(`Updated Guild Vanity Url => ${setVU}`);
        await fetch(`https://discord.com/api/v8/guilds/${gi}/vanity-url`, {
            "credentials": "include",
            "headers": {
                "accept": "*/*",
                "authorization": "Bot " + client.object.botToken,
                "content-type": "application/json",
            },
            "referrerPolicy": "no-referrer-when-downgrade", // Gerekli alan :/
            "body": JSON.stringify({
                "code": url
            }),
            "method": "PATCH",
        });
        let mapPromise = { id: gi, url: setVU, timeNow: Date.now(), type: "PATCH", code: "fetch" };
       await updownheree.mmpsh(mapPromise).then(x => console.log(`Veri Stoklandı! ${mapPromise}`));
    }
    async urlCheck() {
        let VU = client.object.vanityURL;
        let gi = client.guilds.cache.get(client.object.guildID);
        await fetch(`https://discord.com/api/v8/guilds/${gi}/vanity-url`, {
            "credentials": "include",
            "headers": {
                "accept": "*/*",
                "authorization": "Bot " + client.object.botToken,
                "content-type": "application/json",
            },
            "referrerPolicy": "no-referrer-when-downgrade",
            "method": "GET"
        });
        console.log(updownheree.mfx(1));
    }

}
module.exports = Miaf;
