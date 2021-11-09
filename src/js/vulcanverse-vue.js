const VulcanVerseVueApp = {
    data() {
        return {
            message: 'VulcanVerse Adventure Sheet',
            data: { book: 2, name: '', companion: '', attributes: { charm: -2, grace: -2, ingenuity: -2, strength: -2 }, wounded: false, titles: [], money: 0, god: '',  glory: 0, scars: 0, possessions: [], blessings: [], location: 1, codewords: [], notes: ''}
        }
    }
}

Vue.createApp(VulcanVerseVueApp).mount('#vulcanverse-vue');