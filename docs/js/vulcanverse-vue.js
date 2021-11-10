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
        bookTitle: function () {

            var title = 'VulcanVerse Gamebook';

            if (adventurer.book == 1) {
                title = 'The Houses of the Dead';
            } else if (adventurer.book == 2) {
                title = 'The Hammer of the Sun';
            } else if (adventurer.book == 3) {
                title = 'The Wild Woods';
            } else if (adventurer.book == 4) {
                title = 'The Pillars of the Sky';
            } else if (adventurer.book == 5) {
                title = 'Workshop of the Gods';
            }

            return title;
        },

        selectMap: function () {

            var data = { map: '', mapName: '' };

            if (adventurer.book == 1) {
                data.map = 'images/underworld-of-hades-map.jpg';
                data.mapName = 'The Underworld of Hades';
            } else if (adventurer.book == 2) {
                data.map = 'images/desert-of-notus-map.jpg';
                data.mapName = 'The Desert of Notus';
            } else if (adventurer.book == 5) {
                data.map = 'images/vulcan-city-map.jpg';
                data.mapName = 'Vulcan City';
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
        },

        saveFile: function (adventurer) {
            const data = JSON.stringify(adventurer)
            const blob = new Blob([data], { type: 'application/json' })
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = 'adventurer.json';
            a.click();
        }
    }
}

var app = Vue.createApp(VulcanVerseVueApp).mount('#vulcanverse-vue');
