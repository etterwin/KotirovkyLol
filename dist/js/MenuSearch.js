'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function Post(title) {
    _classCallCheck(this, Post);

    this.title = title;
};

var Quotation = function Quotation(time, rating, rev24up, rew24down, nethash, capitalization_up, capitalization_down) {
    _classCallCheck(this, Quotation);

    this.time = time;
    this.rating = rating;
    this.rev24up = rev24up;
    this.rev24down = rev24down;
    this.nethash = nethash;
    this.capitalization_up = capitalization_up;
    this.capitalization_down = capitalization_down;
};

new Vue({
    el: '#app-list',
    data: {
        dataList: [],
        search: '',
        postList: [new Post('Altcommunity(ALTCOM)'), new Post('BitcoinGold(BTG)'), new Post('Bytecoin(BCN)'), new Post('Decred(DCR)'), new Post('DGB-Groestl(DGB)'), new Post('DigitalNote(XDN)'), new Post('Electroneum(ETN)'), new Post('Ellaism(ELLA)'), new Post('Ethereum(ETH)'), new Post('EthereumClassic(ETC)'), new Post('Expanse(EXP)'), new Post('Feathercoin(FTC)'), new Post('GoByte(GBX)'), new Post('GroestlCoin(GRS)'), new Post('Halcyon(HAL)'), new Post('Hush(HUSH)'), new Post('Karbo(KRB)'), new Post('Komodo(KMD)'), new Post('LBRY(LBC)'), new Post('Metaverse(ETP)'), new Post('Monacoin(MONA)'), new Post('Monero(XMR)'), new Post('Musicoin(MUSIC)'), new Post('Myriad-Groestl(XMY)'), new Post('Orbitcoin(ORB)'), new Post('Pascalcoin(PASC)'), new Post('PascalLite(PASL)'), new Post('Pirl(PIRL)'), new Post('Sia(SC)'), new Post('Sibcoin(SIB)'), new Post('Sumokoin(SUMO)'), new Post('Trezarcoin(TZC)'), new Post('Verge-Groestl(XVG)'), new Post('Verge-Lyra2REv2(XVG)'), new Post('Vertcoin(VTC)'), new Post('Vivo(VIVO)'), new Post('Ubiq(UBQ)'), new Post('Zcash(ZEC)'), new Post('Zclassic(ZCL)'), new Post('Zencash(ZEN)')]
    },
    created: function created() {
        var _this = this;

        fetch('http://jutaxe.com/api.php').then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok');
        }).then(function (json) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = json[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var obj = _step.value;

                    _this.dataList.push({
                        time: obj.queue,
                        rating: obj.exrate,
                        rev24up: obj.rev24up,
                        rev24down: obj.rev24down,
                        nethash: obj.nethash,
                        capitalization_up: obj.market_cap_up,
                        capitalization_down: obj.market_cap_down
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }).catch(function (error) {
            console.log(error);
        });
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
            var _this2 = this;

            return this.postList.filter(function (post) {
                return post.title.toLowerCase().includes(_this2.search.toLowerCase());
            });
        }
    }
});
//# sourceMappingURL=MenuSearch.js.map