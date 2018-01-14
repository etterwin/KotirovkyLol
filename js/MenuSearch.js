class Post {
  constructor(title) {
    this.title = title;
  }
}

class Quotation{
  constructor(time, rating, rev24, nethash, coast, capitalization, size) {
    this.time = time;
    this.rating = rating;
    this.rev24 = rev24;
    this.nethash = nethash;
    this.coast = coast;
    this.capitalization = capitalization;
    this.size = size;
  }
}

new Vue ({
  el: '#app-list',
  data: {
      dataList: [],
    search: '',
    postList : [
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
    created() {
        fetch('https://jsonplaceholder.typicode.com/posts/1/')
            .then((response) => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then((json) => {

                /*
                создать массив x in array, где массив - JSON из подJSON, х - key {
                    внутри написать логику с добавлением, т.е. то, что ниже написано
                    скорее всего, vue продублирует
                }
                */

                this.dataList.push({
                        title: json.title, //title и body - поля JSON
                        body: json.body
                        /*
                        time = json.time,
                        rating = json.rating,
                        rev24 = json.rev24,
                        nethash = json.nethash,
                        coast = json.coast,
                        capitalization = json.capitalization,
                        size = json.size
                        */
                    }
                );
            })
            .catch((error) => {
                console.log(error);

            });
    },
  methods: {
    openData: function (event) {
      alert('Hello');
      if (event) {
        alert(event.target.innerHTML);
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


