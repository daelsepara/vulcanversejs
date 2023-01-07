const VulcanVerseVueApp = {

    data() {
        return {
            pageTitle: 'VulcanVerse Adventure Sheet',
            data: { book: 2, name: '', companion: '', attributes: { charm: -2, grace: -2, ingenuity: -2, strength: -2 }, wounded: false, titles: [], money: 0, god: '', glory: 0, scars: 0, possessions: [], blessings: 0, location: 1, codewords: [], notes: '', ticks: [], notes: [], storage: [] },
            codewords: [[], ['Nadir', 'Namesake', 'Nanny', 'Napalm', 'Nasty', 'Natron', 'Nature', 'Naughty', 'Nautilus', 'Navarine', 'Nefarious', 'Negate', 'Nemesis', 'Neophyte', 'Nephew', 'Nervous', 'Nest', 'Nettle', 'Neural', 'Neutralised', 'Neveragain', 'Neverending', 'New-Apollo', 'New-Ares', 'New-Artemis', 'New-Athena', 'Newhouse', 'Nibble', 'Nicked', 'Nifty', 'Niggle', 'Night', 'Nihilism', 'Nimbus', 'Nirvana', 'Noble', 'Noisome', 'Nomad', 'Noodles', 'Nought', 'Nullify', 'Numb', 'Nurture'], ['Oasis', 'Oblige', 'Ochre', 'Ode', 'Oedipus', 'Offer', 'Ogle', 'Ohone', 'Oil', 'Okra', 'Olifant', 'Omen', 'Onerous', 'Ooze', 'Optics', 'Oquassa', 'Ordeal', 'Ostrich', 'Other', 'Outburst', 'Ovation', 'Owl', 'Oxen', 'Oyster', 'Ozone'], ['Painter', 'Panacea', 'Parapet', 'Parentage', 'Parted', 'Passage', 'Passion', 'PatchupOne', 'PatchupTwo', 'PatchupThree', 'PatchupFour', 'PatchupFive', 'PatchupSix', 'PatchupSeven', 'Payment', 'Pelt', 'Penalty', 'Penance', 'Pennywort', 'Penumbra', 'Perdition', 'Pernicious', 'Petasos', 'Pheon', 'Phosphoric', 'Pinot', 'Plantation', 'Planted', 'Pledged', 'Plenty', 'Plight', 'Plough', 'Plundered', 'Poll', 'Praise-Apollo', 'Praise-Ares', 'Praise-Artemis', 'Praise-Athena', 'Prankette', 'Precious', 'Press', 'Priestly', 'Prisoner', 'Projectile', 'Propeller', 'Proprietor', 'Proscribe', 'Prosthetic', 'Provenance', 'Pudding', 'Pumped', 'Punisher', 'Punition', 'Pure', 'Purged', 'Purify', 'Purloin', 'Pursued'], ['Quad', 'Quaestor', 'Quaff', 'Quagmire', 'Quail', 'Quake', 'Quality', 'Quark', 'Quarter', 'Queen', 'Quench', 'Query', 'Quest', 'Queue', 'Quibble', 'Quiddity', 'Quill', 'Quince', 'Quire', 'Quiver', 'Quoit', 'Quondam', 'Quorum', 'Quota'], []],
            gods: ['', 'Aphrodite', 'Apollo', 'Ares', 'Artemis', 'Athena', 'Demeter', 'Hades', 'Hera', 'Hermes', 'Nemesis', 'Orion', 'Poseidon', 'Tethys', 'Vulcan', 'Zeus'],
            companions: ['', 'Chipos', 'Galatea', 'Loutro', 'Magnes', 'Polymnia'],
            titles: ['', 'Accursed of Ares', 'Amazonian Queen', 'Arcadian Art Dealer', 'Archon of Agriculture', 'Archon of Wines', 'Champion of the Amazons', 'Dryad\'s Doom', 'Earth Mother\'s Herald', 'Favoured by Orion', 'Followed by Bathis', 'Friend of the Ferryman', 'Friend of the Forest', 'Giant Slayer', 'Grief Stricken', 'Hero without a Shadow', 'Initiate of Tethysian Mysteries', 'Kissed by a Golden Princess', 'Kissed by a Water Nymph', 'Kraken Friend', 'Lion slayer', 'Master of Mockery', 'Mayor of Bridgadoom', 'Mindless Quarry Slave', 'Persona Non Grata', 'Pursued by Nemesis', 'Queen\'s Champion', 'Saved by a Water Nymph', 'Saviour of Iskandria', 'Sisyphean Taskmaster', 'Slayer of Truffle Farmers', 'Spider\'s Bane', 'Steward of the Summer Palace', 'The Apiarist', 'The Embezzler', 'The Hotelier', 'The Liberator', 'Tricked by a Water Nymph', 'The Gardener', 'Unfriended by Apollo', 'Wolf-runner'],
            modifiers: [0, 0, 0, 0],
            page: 1,
            pages: [[], 832, 1706, 834, 1076],
            ticks: ticks,
            position: { x: 0, y: 0 }
        }
    },
    methods: {

        bookTitle: function () {

            var title = 'VulcanVerse Gamebook';

            if (this.data.book !== undefined) {

                if (this.data.book == 1) {

                    title = 'The Houses of the Dead';

                } else if (this.data.book == 2) {

                    title = 'The Hammer of the Sun';

                } else if (this.data.book == 3) {

                    title = 'The Wild Woods';

                } else if (this.data.book == 4) {

                    title = 'The Pillars of the Sky';

                } else if (this.data.book == 5) {

                    title = 'Workshop of the Gods';
                }
            }

            return title;
        },

        selectMap: function () {

            var mapData = { map: '', mapName: 'Terra Incognito' };

            if (this.data.book !== undefined) {

                if (this.data.book == 1) {

                    mapData.map = 'images/underworld-of-hades-map.jpg';
                    mapData.mapName = 'The Underworld of Hades';
                }
                else if (this.data.book == 2) {

                    mapData.map = 'images/desert-of-notus-map.jpg';
                    mapData.mapName = 'The Desert of Notus';
                }
                else if (this.data.book == 3) {

                    mapData.map = 'images/gardens-of-arcadia-map.jpg';
                    mapData.mapName = 'Gardens of Arcadia';
                }
                else if (this.data.book == 4) {

                    mapData.map = 'images/mountains-of-boreas-map.jpg';
                    mapData.mapName = 'The Mountains of Boreas';
                }
                else if (this.data.book == 5) {

                    mapData.map = 'images/vulcan-city-map.jpg';
                    mapData.mapName = 'Vulcan City';
                }
            }

            return mapData;
        },

        hasCodeword: function (book, code) {

            if (this.data.codewords !== undefined) {

                return (this.data.codewords.find(e => e.book == book && e.code == code) !== undefined);
            }

            return false;
        },

        toggleCodeword: function (book, code) {

            if (this.hasCodeword(book, code)) {

                this.data.codewords = this.data.codewords.filter(e => e.book != book || e.code != code);

            } else {

                this.data.codewords.push({ book: book, code: code });
            }
        },

        getModifier(attribute) {

            var values = [];

            if (this.data !== undefined) {

                if (attribute === 0) {

                    values = this.data.possessions.map(function (e) { return e.charm !== undefined ? e.charm : 0 });
                }
                else if (attribute === 1) {

                    values = this.data.possessions.map(function (e) { return e.grace !== undefined ? e.grace : 0 });
                }
                else if (attribute === 2) {

                    values = this.data.possessions.map(function (e) { return e.ingenuity !== undefined ? e.ingenuity : 0 });
                }
                else if (attribute === 3) {

                    values = this.data.possessions.map(function (e) { return e.strength !== undefined ? e.strength : 0 });
                }
            }

            var modifier = Math.max.apply(null, values);

            return modifier > 0 ? modifier : 0;
        },

        itemAttributes: function (item) {

            var attr = '';

            var count = 0;

            if (item.charm !== undefined) {

                if (item.charm < 0) {

                    attr += '-';
                }
                else if (item.charm > 0) {

                    attr += '+';
                }

                attr += item.charm + ' CHARM';

                count++;
            }

            if (item.grace !== undefined) {

                if (count > 0) {

                    attr += ', ';
                }

                if (item.grace < 0) {

                    attr += '-';
                }
                else {

                    attr += '+';
                }

                attr += item.grace + ' GRACE';

                count++;
            }

            if (item.ingenuity !== undefined) {

                if (count > 0) {

                    attr += ', ';
                }

                if (item.ingenuity < 0) {

                    attr += '-';
                }
                else {

                    attr += '+';
                }

                attr += item.ingenuity + ' INGENUITY';

                count++;
            }

            if (item.strength !== undefined) {

                if (count > 0) {

                    attr += ', ';
                }

                if (item.strength < 0) {

                    attr += '-';
                }
                else {
                    attr += '+';
                }

                attr += item.strength + ' STRENGTH';

                count++;
            }

            if (attr.length > 0) {

                attr = '(' + attr + ')';
            }

            return attr;
        },

        hasItem: function (i) {

            return this.data !== undefined && this.data.possessions[i] !== undefined;
        },

        addItem: function (item) {

            if (this.data !== undefined && item !== undefined) {

                this.data.possessions.push(item);

                for (var i = 0; i < 4; i++) {

                    this.modifiers[i] = this.getModifier(i);
                }
            }
        },

        removeItem: function (i, e) {

            if (this.data !== undefined) {

                if (!e.target.checked) {

                    this.data.possessions.splice(i, 1);

                    e.target.checked = true;

                    for (var i = 0; i < 4; i++) {

                        this.modifiers[i] = this.getModifier(i);
                    }
                }
            }
        },

        hasTitle: function (i) {

            return this.data !== undefined && this.data.titles[i] !== undefined;
        },

        addTitle: function (title) {

            if (this.data !== undefined && title !== undefined && title.length > 0) {

                this.data.titles.push(title);
            }
        },

        removeTitle: function (i, e) {

            if (this.data !== undefined) {

                if (!e.target.checked) {

                    this.data.titles.splice(i, 1);

                    e.target.checked = true;
                }
            }
        },

        removeNote: function (i) {

            if (this.data !== undefined && this.data.notes !== undefined && i >= 0 && i < this.data.notes.length) {

                this.data.notes.splice(i, 1);
            }
        },

        addNote: function (note) {

            if (this.data !== undefined && note !== undefined) {

                if (this.data.notes === undefined || this.data.notes.length == 0) {

                    this.data.notes = Array();
                }

                this.data.notes.push(note);
            }
        },

        getPages: function (book) {

            book = Number.parseInt(book);

            if (book !== undefined && book >= 0 && ticks[book] !== undefined) {

                return this.pages[book];
            }
            else {

                return 1;
            }
        },

        getPagesWithTicks: function (book) {

            book = Number.parseInt(book);

            if (book !== undefined && book >= 0 && ticks[book] !== undefined) {

                return ticks[book];
            }
            else {

                return [];
            }
        },

        getTicks: function (book, page) {

            book = Number.parseInt(book);

            var count = 0;

            if (ticks[book] !== undefined && ticks[book].length > 0) {

                var section = ticks[book].find(e => e.book == book && e.page == page + 1);

                if (section !== undefined) {

                    count = section.ticks;
                }
            }

            return count;
        },

        isTicked: function (book, page, box) {

            var result = false;

            var count = this.getTicks(book, page);

            if (count > 0) {

                if (this.data.ticks !== undefined || this.data.ticks.length == 0) {

                    var tick = this.data.ticks.find(e => e.book == book && e.page == page);

                    if (tick === undefined) {

                        this.data.ticks.push({ book: book, page: page, ticks: Array(count) });
                    }

                    result = (this.data.ticks.find(e => e.book == book && e.page == page && e.ticks[box] == true)) !== undefined;

                } else {

                    this.data.ticks = [];
                }
            }

            return result;
        },

        toggleTick: function (book, page, box) {

            var count = this.getTicks(book, page);

            if (count > 0) {

                var ticked = this.isTicked(book, page, box);

                var index = this.data.ticks.findIndex(e => e.book == book && e.page == page);

                if (index >= 0 && index < this.data.ticks.length) {

                    this.data.ticks[index].ticks[box] = !ticked;
                }
            }
        },

        saveFile: function () {

            const json = JSON.stringify(this.data)

            const blob = new Blob([json], { type: 'application/json' })

            var a = document.createElement("a");

            a.href = URL.createObjectURL(blob);

            a.download = 'adventurer.json';

            a.click();
        },

        loadFile: function (ev) {

            const file = ev.target.files[0];

            const reader = new FileReader();

            reader.onload = e => {

                var json = JSON.parse(e.target.result);

                if (json !== undefined) {

                    this.data = json;

                    for (var i = 0; i < 4; i++) {

                        this.modifiers[i] = this.getModifier(i);
                    }

                    if (this.data.notes === undefined || this.data.notes.length == 0) {

                        this.data.notes = [];
                    }

                    if (this.data.storage === undefined || this.data.storage.length == 0) {

                        this.data.storage = [];
                    }
                }
            };

            reader.readAsText(file);
        }
    }
}

var app = Vue.createApp(VulcanVerseVueApp).mount('#vulcanverse-vue');

var initDraggable = function () {

    var getMapBounds = function () {

        var map = document.querySelector('#bigMap');

        var containerRects = document.querySelector('.map-container').getClientRects()[0];

        return {

            x: (map.offsetWidth - containerRects.width) * -1,

            y: (map.offsetHeight - containerRects.height) * -1
        };
    };

    var mapBounds = getMapBounds();

    interact('.draggable').draggable({

        listeners: {

            move(event) {

                var nextX = app.position.x + event.dx;
                var nextY = app.position.y + event.dy;

                if (nextX > 0) nextX = 0;
                if (nextY > 0) nextY = 0;

                var mapBounds = getMapBounds();

                if (nextX < mapBounds.x) nextX = mapBounds.x;
                if (nextY < mapBounds.y) nextY = mapBounds.y;

                app.position.x = nextX;
                app.position.y = nextY;

                event.target.style.transform = `translate(${app.position.x}px, ${app.position.y}px)`;
            },
        }
    })
}
