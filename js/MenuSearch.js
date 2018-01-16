class Post {
    constructor(title) {
        this.title = title;
    }
}
//видимо, он не так уж и нужен, да?
// class Quotation {
//     constructor(time, rating, rev24up, rew24down, nethash, capitalization_up, capitalization_down) {
//         this.time = time;
//         this.rating = rating;
//         this.rev24up = rev24up;
//         this.rev24down = rev24down;
//         this.nethash = nethash;
//         this.capitalization_up = capitalization_up;
//         this.capitalization_down = capitalization_down;
//     }
// }

new Vue({
    el: '#app-list',
    data: {
        dataList: [],
        search: '',
        postList: [
            new Post(
                'Altcommunity(ALTCOM)'
            ),
            new Post(
                'BitcoinGold(BTG)'
            ),
            new Post(
                'Bytecoin(BCN)'
            ),
            new Post(
                'Decred(DCR)'
            ),
            new Post(
                'DGB-Groestl(DGB)'
            ),
            new Post(
                'DigitalNote(XDN)'
            ),
            new Post(
                'Electroneum(ETN)'
            ),
            new Post(
                'Ellaism(ELLA)'
            ),
            new Post(
                'Ethereum(ETH)'
            ),
            new Post(
                'EthereumClassic(ETC)'
            ),
            new Post(
                'Expanse(EXP)'
            ),
            new Post(
                'Feathercoin(FTC)'
            ),
            new Post(
                'GoByte(GBX)'
            ),
            new Post(
                'GroestlCoin(GRS)'
            ),
            new Post(
                'Halcyon(HAL)'
            ),
            new Post(
                'Hush(HUSH)'
            ),
            new Post(
                'Karbo(KRB)'
            ),
            new Post(
                'Komodo(KMD)'
            ),
            new Post(
                'LBRY(LBC)'
            ),
            new Post(
                'Metaverse(ETP)'
            ),
            new Post(
                'Monacoin(MONA)'
            ),
            new Post(
                'Monero(XMR)'
            ),
            new Post(
                'Musicoin(MUSIC)'
            ),
            new Post(
                'Myriad-Groestl(XMY)'
            ),
            new Post(
                'Orbitcoin(ORB)'
            ),
            new Post(
                'Pascalcoin(PASC)'
            ),
            new Post(
                'PascalLite(PASL)'
            ),
            new Post(
                'Pirl(PIRL)'
            ),
            new Post(
                'Sia(SC)'
            ),
            new Post(
                'Sibcoin(SIB)'
            ),
            new Post(
                'Sumokoin(SUMO)'
            ),
            new Post(
                'Trezarcoin(TZC)'
            ),
            new Post(
                'Verge-Groestl(XVG)'
            ),
            new Post(
                'Verge-Lyra2REv2(XVG)'
            ),
            new Post(
                'Vertcoin(VTC)'
            ),
            new Post(
                'Vivo(VIVO)'
            ),
            new Post(
                'Ubiq(UBQ)'
            ),
            new Post(
                'Zcash(ZEC)'
            ),
            new Post(
                'Zclassic(ZCL)'
            ),
            new Post(
                'Zencash(ZEN)'
            )
        ]
    },
    /*created() {
        fetch('http://jutaxe.com/api.php')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then((json) => {
                for (const obj of json) {
                    this.dataList.push({
                        time: obj.queue.slice(6,8)+':'+obj.queue.slice(8, 10),
                        //rating: obj. ,
                        rev24up: obj.rev24up,
                        rev24down: obj.rev24down,
                        nethash: obj.nethash,
                        coast: obj.exrate,
                        capitalization: obj.market_cap_up.slice(0, -6)+','+obj.market_cap_up.slice(-6, -3)+','+obj.market_cap_up.slice(-3),
                        size: obj.market_cap_down
                    });
               }
    })
    .catch((error) => {
            console.log(error);

        });
    },*/

    methods: {
        openData: function (event) {
            if (event) {
                alert(event.target.innerHTML);
                axios.post('http://jutaxe.com/api.php', {
                name: event.target.innerHTML
                })
                    .then(function (response) {
                        console.log(response);
                    })
            }
        }
    },
    computed: {
        filteredList() {
            return this.postList.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
});

/*нужно реализовать вывод по конкретной монете и вывод за дату*/


