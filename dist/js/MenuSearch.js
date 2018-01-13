'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function Post(title) {
  _classCallCheck(this, Post);

  this.title = title;
};

var Quotation = function Quotation(time, rating, rev24, nethash, coast, capitalization, size) {
  _classCallCheck(this, Quotation);

  this.time = time;
  this.rating = rating;
  this.rev24 = rev24;
  this.nethash = nethash;
  this.coast = coast;
  this.capitalization = capitalization;
  this.size = size;
};

new Vue({
  el: '#app-list',
  data: {
    search: '',
    postList: [new Post('Altcommunity(ALTCOM)'), new Post('BitcoinGold(BTG)'), new Post('Bytecoin(BCN)'), new Post('Decred(DCR)'), new Post('DGB-Groestl(DGB)'), new Post('DigitalNote(XDN)'), new Post('Electroneum(ETN)'), new Post('Ellaism(ELLA)'), new Post('Ethereum(ETH)'), new Post('EthereumClassic(ETC)'), new Post('Expanse(EXP)'), new Post('Feathercoin(FTC)'), new Post('GoByte(GBX)'), new Post('GroestlCoin(GRS)'), new Post('Halcyon(HAL)'), new Post('Hush(HUSH)'), new Post('Karbo(KRB)'), new Post('Komodo(KMD)'), new Post('LBRY(LBC)'), new Post('Metaverse(ETP)'), new Post('Monacoin(MONA)'), new Post('Monero(XMR)'), new Post('Musicoin(MUSIC)'), new Post('Myriad-Groestl(XMY)'), new Post('Orbitcoin(ORB)'), new Post('Pascalcoin(PASC)'), new Post('PascalLite(PASL)'), new Post('Pirl(PIRL)'), new Post('Sia(SC)'), new Post('Sibcoin(SIB)'), new Post('Sumokoin(SUMO)'), new Post('Trezarcoin(TZC)'), new Post('Verge-Groestl(XVG)'), new Post('Verge-Lyra2REv2(XVG)'), new Post('Vertcoin(VTC)'), new Post('Vivo(VIVO)'), new Post('Ubiq(UBQ)'), new Post('Zcash(ZEC)'), new Post('Zclassic(ZCL)'), new Post('Zencash(ZEN)')]
  },
  methods: {
    openData: function openData(event) {
      alert('Hello');
      if (event) {
        alert(event.target.innerHTML);
      }
    }
  },
  computed: {
    filteredList: function filteredList() {
      var _this = this;

      return this.postList.filter(function (post) {
        return post.title.toLowerCase().includes(_this.search.toLowerCase());
      });
    }
  }
});

new Vue({
  el: '#app-table',
  data: {
    dataList: [new Quotation()]
  }

});
//# sourceMappingURL=MenuSearch.js.map