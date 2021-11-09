
var adventurer = { book: 2, name: '', companion: '', attributes: { charm: -2, grace: -2, ingenuity: -2, strength: -2 }, wounded: false, titles: [], money: 0, god: '', glory: 0, scars: 0, possessions: [], blessings: [], location: 1, codewords: [], notes: '' };

const VulcanVerseVueApp = {

    data() {
        return {
            message: 'VulcanVerse Adventure Sheet',
            data: adventurer
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
            }
            else {
                data.mapName = 'Terra Incognito';
            }

            return data;
        }
    }
}

Vue.createApp(VulcanVerseVueApp).mount('#vulcanverse-vue');

