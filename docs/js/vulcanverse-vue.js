const VulcanVerseVueApp = {

    data() {
        return {
            pageTitle: 'VulcanVerse Adventure Sheet',
            data: { book: 2, name: '', companion: '', attributes: { charm: -2, grace: -2, ingenuity: -2, strength: -2 }, wounded: false, titles: [], money: 0, god: '', glory: 0, scars: 0, possessions: [], blessings: 0, location: 1, codewords: [], notes: '', ticks: [] },
            codewords: [[], ['Nadir', 'Namesake', 'Nanny', 'Napalm', 'Nasty', 'Natron', 'Nature', 'Naughty', 'Nautilus', 'Navarine', 'Nefarious', 'Negate', 'Nemesis', 'Neophyte', 'Nephew', 'Nervous', 'Nest', 'Nettle', 'Neural', 'Neutralised', 'Neveragain', 'Neverending', 'Negate', 'Nemesis', 'Neophyte', 'Nephew', 'Nervous', 'Nest', 'Nettle', 'Neural', 'Neutralised', 'Neveragain', 'Neverending', 'Nimbus', 'Nirvana', 'Noble', 'Noisome', 'Nomad', 'Noodles', 'Nought', 'Nullify', 'Numb', 'Nurture'], ['Oasis', 'Oblige', 'Ochre', 'Ode', 'Oedipus', 'Offer', 'Ogle', 'Ohone', 'Oil', 'Okra', 'Olifant', 'Omen', 'Onerous', 'Ooze', 'Optics', 'Oquassa', 'Ordeal', 'Ostrich', 'Other', 'Outburst', 'Ovation', 'Owl', 'Oxen', 'Oyster', 'Ozone'], [], [], []],
            gods: ['', 'Aphrodite', 'Apollo', 'Ares', 'Athena', 'Demeter', 'Hades', 'Hera', 'Hermes', 'Nemesis', 'Orion', 'Poseidon', 'Tethys', 'Vulcan', 'Zeus'],
            companions: ['', 'Chipos', 'Galatea', 'Loutro', 'Polymnia'],
            titles: ['', 'Accursed of Ares', 'Amazonian Queen', 'Champion of the Amazons', 'Earth Mother\'s Herald', 'Favoured by Orion', 'Followed by Bathis', 'Initiate of Tethysian Mysteries', 'Persona Non Grata', 'Pursued by Nemesis', 'Saviour of Iskandria', 'Unfriended by Apollo'],
            modifiers: [0, 0, 0, 0]
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
                } else if (this.data.book == 2) {

                    mapData.map = 'images/desert-of-notus-map.jpg';
                    mapData.mapName = 'The Desert of Notus';

                } else if (this.data.book == 5) {

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

            if (item.charm !== undefined) {

                if (item.charm < 0) {

                    attr += '-';
                }
                else if (item.charm > 0) {

                    attr += '+';
                }

                attr += item.charm + ' CHARM';
            }

            if (item.grace !== undefined) {

                if (item.grace < 0) {

                    attr += '-';
                }
                else {

                    attr += '+';
                }

                attr += item.grace + ' GRACE';
            }

            if (item.ingenuity !== undefined) {

                if (item.ingenuity < 0) {

                    attr += '-';
                }
                else {

                    attr += '+';
                }

                attr += item.ingenuity + ' INGENUITY';
            }

            if (item.strength !== undefined) {

                if (item.strength < 0) {

                    attr += '-';
                }
                else {
                    attr += '+';
                }

                attr += item.strength + ' STRENGTH';
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
                }
            };

            reader.readAsText(file);
        }
    }
}

var app = Vue.createApp(VulcanVerseVueApp).mount('#vulcanverse-vue');
