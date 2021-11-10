var adventurer = { book: 2, name: '', companion: '', attributes: { charm: -2, grace: -2, ingenuity: -2, strength: -2 }, wounded: false, titles: [], money: 0, god: '', glory: 0, scars: 0, possessions: [], blessings: [], location: 1, codewords: [], notes: '', ticks: [] };

var codewords1 = ['Nadir', 'Namesake', 'Nanny', 'Napalm', 'Nasty', 'Natron', 'Nature', 'Naughty', 'Nautilus', 'Navarine', 'Nefarious', 'Negate', 'Nemesis', 'Neophyte', 'Nephew', 'Nervous', 'Nest', 'Nettle', 'Neural', 'Neutralised', 'Neveragain', 'Neverending', 'Negate', 'Nemesis', 'Neophyte', 'Nephew', 'Nervous', 'Nest', 'Nettle', 'Neural', 'Neutralised', 'Neveragain', 'Neverending', 'Nimbus', 'Nirvana', 'Noble', 'Noisome', 'Nomad', 'Noodles', 'Nought', 'Nullify', 'Numb', 'Nurture'];
var codewords2 = ['Oasis', 'Oblige', 'Ochre', 'Ode', 'Oedipus', 'Offer', 'Ogle', 'Ohone', 'Oil', 'Okra', 'Olifant', 'Omen', 'Onerous', 'Ooze', 'Optics', 'Oquassa', 'Ordeal', 'Ostrich', 'Other', 'Outburst', 'Ovation', 'Owl', 'Oxen', 'Oyster', 'Ozone'];
var codewords3 = [];
var codewords4 = [];
var codewords5 = [];
var codewords6 = [];

var codewords = [[], codewords1, codewords2, codewords3, codewords4, codewords5];

const VulcanVerseVueApp = {

    data() {
        return {
            pageTitle: 'VulcanVerse Adventure Sheet',
            data: adventurer,
            codewords: codewords
        }
    },
    methods: {
        selectMap: function () {

            var data = { map: '', mapName: '' };

            if (adventurer.book == 1) {
                data.map = 'images/underworld-of-hades-map.jpg';
                data.mapName = 'The Underworld of Hades';
            } else if (adventurer.book == 2) {
                data.map = 'images/desert-of-notus-map.jpg';
                data.mapName = 'The Desert of Notus';
            } else {
                data.mapName = 'Terra Incognito';
            }

            return data;
        },

        hasCodeword: function (codes, book, code) {

            return (codes.find(e => e.book == book && e.code == code) !== undefined);
        },

        toggleCodeword: function (codes, book, code) {

            if (this.hasCodeword(codes, book, code)) {
                codes = codes.filter(e => e.book != book || e.code != code);
            } else {
                codes.push({ book: book, code: code });
            }

            return codes;
        }
    }
}

var app = Vue.createApp(VulcanVerseVueApp).mount('#vulcanverse-vue');
